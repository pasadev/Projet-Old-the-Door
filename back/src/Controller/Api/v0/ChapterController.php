<?php

namespace App\Controller\Api\v0;

use App\Entity\Chapter;
use App\Form\ChapterType;
use App\Repository\ChapterRepository;
use App\Repository\StoryRepository;
use App\Service\KeyLockWordChecker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ChapterController extends AbstractController
{


    /**
     * @Route("api/v0/chapters" , name="api_v0_chapters_list", methods={"GET"})
     */
    public function list (Request $request, ObjectNormalizer $normalizer, ChapterRepository $chapterRepository )
    {
        // if we have a URL parameter
        if ($request->query->get('story_id')){

            // get URL parameter 
            $storyId = $request->query->get('story_id');

            // Verify if we have a parameter non_parent at true
            if ($request->query->get('non_parent') === 'true')
            {
                //send non parents chapters for this story
                $AllChapters = $chapterRepository->findChaptersForStory($storyId);
                $chapterList = [];
                $parentChapterList = [];

                foreach ($AllChapters as $chapter) {

                    $chapterList[] = $chapter->getId() ;

                    if($chapter->getParentChapter())
                    {
                        $parentChapterList[] = $chapter->getParentChapter()->getId();
                    }
                }
                $nonParentChapterList = array_diff($chapterList, $parentChapterList);
                
                //Initialize chapters list
                $chapters = [];

                // Rebuild $chapters
                foreach ($nonParentChapterList as $nonParentChapterId) {
                    $nonParentChapter = $chapterRepository->find($nonParentChapterId);
                    $chapters[] = $nonParentChapter;
                }
               
            }
            //If not, we send all chapters for this story
            else
            {
                // get chapter in terms of his story
                $chapters = $chapterRepository->findChaptersForStory($storyId); 
            }
            
            if ($chapters){

                // Tools for serializing chapter
                $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);
                
                // Normalize chapter
                $normalizeChapters = $serializer->normalize($chapters, null, [AbstractObjectNormalizer::ENABLE_MAX_DEPTH => true ,'groups' => 'chapter_list']);
                
                
                // return chapter data in json
                return $this->json([
                    $normalizeChapters
                    ]);
            }
            else 
            {
                //We send back a message with a 404 error
                return $this->json(
                    ['message' => 'We have not found any chapter',],
                    404
                );
            }
        }
        // if we don't have URL parameter
        else 
        {
            return $this->json(
                ['message' => 'Bad Request, please use a story_id GET parameter ',],
                400
            );  
        }
        
    }

    /**
     * Return the child chapter for a given chapter id
     * 
     * @Route("/api/v0/chapters/{id}/child", name="api_v0_chapters_show_child" , methods={"GET"} , requirements={"id":"\d+"})
     *
     * @param [type] $id
     * @return object
     */
    public function showChild($id, ChapterRepository $chapterRepository, ObjectNormalizer $normalizer)
    {

        //Get the child chapter for the chapter id given
        $childChapter = $chapterRepository->findChildChapter($id);

        if (!$childChapter) {
            // return chapter data in json
            return $this->json(
                [], 204
            );
        }

        // Tools for serializing chapter
        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        // Normalize childChapter
        $normalizeChildChapter = $serializer->normalize($childChapter, null, [AbstractObjectNormalizer::ENABLE_MAX_DEPTH => true ,'groups' => 'chapter_list']);

        // return chapter data in json
         return $this->json([
            $normalizeChildChapter
        ]);

    }

    /**
     * @Route("/api/v0/chapters/{id}", name="api_v0_chapters_show" , methods={"GET"} , requirements={"id":"\d+"})
     */
    public function show(Chapter $chapter, ObjectNormalizer $normalizer)
    {
         // Tools for serializing chapter
        $serializer = new Serializer([new DateTimeNormalizer() , $normalizer]);

        // Normalize chapter
        $normalizeChapter = $serializer->normalize($chapter , null , ['groups' => 'chapter_details']);

        // return chapter data in json
        return $this->json([
            $normalizeChapter
        ]);
    }

    /**
     * Add a chapter in DB
     * 
     * @Route("/api/v0/chapters", name="api_v0_chapters_add", methods={"POST"})
     *
     * @return Chapter
     */
    public function add(Request $request, ObjectNormalizer $normalizer, StoryRepository $storyRepository, KeyLockWordChecker $checker)
    {
        //Create an empty chapter
        $chapter = new Chapter();
        
        
        //Create the associating form to send request data in the chapter
        //With the csrf option desactivated as we are on an API
        $form = $this->createForm(ChapterType::class, $chapter, ['csrf_protection' => false]);
        
        //Extract the json content of the request
        $jsonText = $request->getContent();
        
        //Transform this Json in array
        $jsonArray = json_decode($jsonText, true);
        
        //We submit this data array to the form
        $form->submit($jsonArray);
        
        //check if user is logged
        $this->denyAccessUnlessGranted('add', $chapter);

        //Verify if the form is valid
        if ($form->isValid())
        {
            /* ******************************* */
            /* Lock and key verification start */

            //Get values
            $keyWord = $chapter->getKeyword();
            $lockWord = $chapter->getLockword();
            $content = $chapter->getContent();

            // Call the service to check if words are in the chapter content
            if ($checker->checkWords($keyWord, $lockWord, $content) === false)
            {
                // If it is not ok, send an error
                return $this->json(["message" => "keyword and lockword should be in the chapter content"], 400);
            }

            /* Lock and key verification end */
            /* ***************************** */
            
            //Set a created date
            $chapter->setCreatedAt(new \DateTime());

            //If it is valid, we persist and flush
            $em = $this->getDoctrine()->getManager();
            $em->persist($chapter);

            /* ******************************* */
            /* FirstChapter verification start */            

            // Register the story Id
            $storyId = json_decode($request->getContent(), true)["forStory"];

            // Fetch the story
            $story = $storyRepository->find($storyId);
            //Get all the chapters for this story
            $chaptersForStory = $story->getHasChapters();

            //If there is no chapter
            if (count($chaptersForStory) === 0)
            {
                // Set this chapter has firstChapter for the story
                $story->setFirstChapter($chapter);
            }

            /* FirstChapter verification end */
            /* ***************************** */

            $em->flush();


            //Then, we return 201 HTTP code with the Chapter Object created

            //Serialize the data
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedChapter = $serializer->normalize($chapter, null, ['groups' => 'chapter_details']);

            //And return it
            return $this->json($normalizedChapter, 201);

        }

        //If it is not valid
        //We display errors
        //With a 400 Bad request HTTP code
        return $this->json((string) $form->getErrors(true, false), 400);

    }

    /**
     * Edit an existing chapter in DB
     * 
     * @Route("/api/v0/chapters/{id}", name="api_v0_chapters_edit", methods={"PUT"}, requirements={"id":"\d+"})
     *
     * @return Chapter
     */
    public function edit(Chapter $chapter, Request $request, ObjectNormalizer $normalizer, KeyLockWordChecker $checker)
    {
        //check if user is logged and also the author of the related story
        $this->denyAccessUnlessGranted('edit', $chapter);

        //Create the associating form to send request data in the chapter in parameter
        //With the csrf option desactivated as we are on an API
        $form = $this->createForm(ChapterType::class, $chapter, ['csrf_protection' => false]); 

         //Extract the json content of the request
         $jsonText = $request->getContent();

         //Transform this Json in array
         $jsonArray = json_decode($jsonText, true);
 
         //We submit this data array to the form
         $form->submit($jsonArray);

        //Verify if the form is valide
        if ($form->isValid())
        {

            /* ******************************* */
            /* Lock and key verification start */

            //Get values
            //Get values
            $keyWord = $chapter->getKeyword();
            $lockWord = $chapter->getLockword();
            $content = $chapter->getContent();

            // Call the service to check if words are in the chapter content
            if ($checker->checkWords($keyWord, $lockWord, $content) === false)
            {
                // If it is not ok, send an error
                return $this->json(["message" => "keyword and lockword should be in the chapter content"], 400);
            }

            /* Lock and key verification end */
            /* ***************************** */

            //Set an updated date
            $chapter->setUpdatedAt(new \DateTime());

            //If it is valid, we flush
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            //Then, we return 200 HTTP code with the Chapter Object updated

            //Serialize the data
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedChapter = $serializer->normalize($chapter, null, ['groups' => 'chapter_details']);

            //And return it
            return $this->json($normalizedChapter, 200);

        }

        //If it is not valid
        //We display errors
        //With a 400 Bad request HTTP code
        return $this->json((string) $form->getErrors(true, false), 400);
    }

    /**
     * Delete one story with the id parameter
     * 
     * @Route("/api/v0/chapters/{id}", name="api_v0_chapters_delete", methods={"DELETE"}, requirements={"id":"\d+"})
     */
    public function delete(Chapter $chapter)
    {
        //check if user is logged and user the author
        $this->denyAccessUnlessGranted('delete', $chapter);

        //Get back the manager
        $em = $this->getDoctrine()->getManager();
        $em->remove($chapter);
        $em->flush();

        return $this->json([], 204);
    }
}
