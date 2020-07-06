<?php

namespace App\Controller\Api\v0;

use App\Entity\Chapter;
use App\Repository\ChapterRepository;
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
            
            // get chapter in terms of his story
            $chapters = $chapterRepository->findChaptersForStory($storyId); 
            
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
     * Delete one story with the id parameter
     * 
     * @Route("/api/v0/chapters/{id}", name="api_v0_chapters_delete", methods={"DELETE"}, requirements={"id":"\d+"})
     */
    public function delete(Chapter $chapter)
    {

        //Get back the manager
        $em = $this->getDoctrine()->getManager();
        $em->remove($chapter);
        $em->flush();

        return $this->json([], 204);
    }
}
