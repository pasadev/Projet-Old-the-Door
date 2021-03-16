<?php

namespace App\Controller\Api\v0;

use App\Entity\Story;
use App\Form\StoryType;
use App\Repository\PartyRepository;
use App\Repository\StoryRepository;
use App\Repository\UserRepository;
use App\Service\Slugger;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


class StoryController extends AbstractController
{
    /**
     * Return all stories
     * 
     * @Route("/api/v0/stories", name="api_v0_stories_list", methods={"GET"})
     * 
     */
    public function list(StoryRepository $storyRepository, ObjectNormalizer $normalizer, Request $request)
    {

        //If we have the 'last' parameter
        if ($request->query->get('last')) {
            //intVal the parameter to avoid non numeric values
            //If the parameter is not an integer, findActiveStories will return all stories 
            $storyNumber = intval($request->query->get('last'));

            //Get the n last stories
            $stories = $storyRepository->findActiveStories($storyNumber);
        }
        //If we have the author_id parameter
        //intVal allow us to be sure that the author_id paramater is correct
        else if ($request->query->get('author_id') && intval($request->query->get('author_id'))) {
            $authorId = $request->query->get('author_id');
            //Get the stories for this author
            $stories = $storyRepository->findForAuthor($authorId);
        }
        //If we don't have any get parameter
        else {
            //Get the stories
            $stories = $storyRepository->findActiveStories();
        }

        //If we have stories to send
        if ($stories) {
            //Instanciate the serializer
            //Instanciate DateTimeNormalizer to convert the DateTime object propery into sring
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            //Normalize the stories collection
            $normalizedStories = $serializer->normalize($stories, null, ['groups' => 'api_story_detail']);


            //Return all stories    
            return $this->json([
                $normalizedStories,
            ]);
        }
        //If we have not found any stories
        else {
            //We send back a message with a 404 error
            return $this->json(
                ['message' => 'We have not found any stories',],
                404
            );
        }
    }

    /**
     * Return the number of active stories
     * 
     * @Route("/api/v0/stories/count", name="api_v0_stories_count", methods={"GET"})
     *
     * @param StoryRepository $storyRepository
     * @return json
     */
    public function count(StoryRepository $storyRepository)
    {
        //Get the active stories
        $stories = $storyRepository->findActiveStories();
        $storyNumber = count($stories);

        //Return the number
        return $this->json([
            'storyNumber' => $storyNumber,
        ]);
    }

    /**
     * Return one story with the id parameter
     * 
     * @Route("/api/v0/stories/{id}", name="api_v0_stories_show", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function show(Story $story, ObjectNormalizer $normalizer)
    {

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedStory = $serializer->normalize($story, null, ['groups' => 'api_story_detail']);

        //Return all stories    
        return $this->json([
            $normalizedStory
        ]);
    }

    /**
     * Return one story with slug parameter
     * 
     * @Route("/api/v0/stories/{slug}" , name="api_v0_stories_slug", methods={"GET"})
     */
    public function showBySlug (Story $story , ObjectNormalizer $normalizer)
    {
        $this->denyAccessUnlessGranted('showBySlug', $story);

        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedStory = $serializer->normalize($story, null, ['groups' => 'api_story_detail']);

        //Return all stories    
        return $this->json([
            $normalizedStory
        ]);
    }

    /**
     * Add a story in DB
     * 
     * @Route("/api/v0/stories", name="api_v0_stories_add", methods={"POST"})
     * 
     * Slugger service allows to create the slug
     *
     * @return Story
     */
    public function add(Request $request, ObjectNormalizer $normalizer, Slugger $slugger, StoryRepository $storyRepository, UserRepository $userRepository)
    {

        //Create an empty story
        $story = new Story();

        //check if user is logged
        $this->denyAccessUnlessGranted('add', $story);
 
        
        //Create the associating form to send request data in the story
        //With the csrf option desactivated as we are on an API
        $form = $this->createForm(StoryType::class, $story, ['csrf_protection' => false]);
        
        //Extract the json content of the request
        $jsonText = $request->getContent();
        
        //Transform this Json in array
        $jsonArray = json_decode($jsonText, true);
        
        

        //We submit this data array to the form
        $form->submit($jsonArray);

        //Verify if the form is valid
        if ($form->isValid()) {
            //Set a created date
            $story->setCreatedAt(new \DateTime());

            //Set the slug
            $story->setSlug($slugger->slugify($story->getTitle()));

            //verify if the slug does not exists yet
            if ($storyRepository->findOneBy(['slug' => $story->getSlug()])) {
                return $this->json(['message' => 'This story title already exists'], 409);
            }

            //If it is valid, we persists and flush
            $em = $this->getDoctrine()->getManager();
            $em->persist($story);
            $em->flush();


            //Then, we return 201 HTTP code with the Story Object created

            //Serialize the data
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedStory = $serializer->normalize($story, null, ['groups' => 'api_story_detail']);

            //And return it
            return $this->json($normalizedStory, 201);
        }

        //If it is not valid
        //We display errors
        //With a 400 Bad request HTTP code
        return $this->json((string) $form->getErrors(true, false), 400); 

    }

    /**
     * Edit an existing story
     * @Route("/api/v0/stories/{id}", name="api_v0_stories_edit", methods={"PUT"}, requirements={"id":"\d+"})
     *
     * @return Story
     */
    public function edit(Story $story, Request $request, ObjectNormalizer $normalizer, Slugger $slugger, StoryRepository $storyRepository, UserRepository $userRepository)
    {

        //check if user is logged
      $this->denyAccessUnlessGranted('edit', $story);

    //Create the associating form to send request data in the story in parameter
    //With the csrf option desactivated as we are on an API
    $form = $this->createForm(StoryType::class, $story, ['csrf_protection' => false]);

    //Extract the json content of the request
    $jsonText = $request->getContent();

    //Transform this Json in array
    $jsonArray = json_decode($jsonText, true);
    

    //We submit this data array to the form
    $form->submit($jsonArray);

    //Verify if the form is valide
    if ($form->isValid()) {
        //Set an updated date
        $story->setUpdatedAt(new \DateTime());

        //If the title has changed
        if ($story->getSlug() !== $slugger->slugify($story->getTitle())) {
            //verify if the slug does not exists yet
            if ($storyRepository->findOneBy(['slug' => $slugger->slugify($story->getTitle())]))
            {
                return $this->json(['message' => 'This story title already exists'], 409);
            }
        }

        //Set the slug
        $story->setSlug($slugger->slugify($story->getTitle()));

        //If it is valid, we flush
        $em = $this->getDoctrine()->getManager();
        $em->flush();

        //Then, we return 200 HTTP code with the Story Object updated

        //Serialize the data
        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedStory = $serializer->normalize($story, null, ['groups' => 'api_story_detail']);

        //And return it
        return $this->json($normalizedStory, 200);
    }

    //If it is not valid
    //We display errors
    //With a 400 Bad request HTTP code
    return $this->json((string) $form->getErrors(true, false),400);
    }

    /**
     * Active or unactive a story, depending of the get parameter
     * @Route("/api/v0/stories/{id}/active", name="api_v0_stories_active", methods={"PUT"}, requirements={"id":"\d+"})
     * 
     * @param Story $story
     * @return void
     */
    public function active(Story $story, Request $request, ObjectNormalizer $normalizer)
    {

        //check if user is logged
        $this->denyAccessUnlessGranted('active', $story);

        //Verify if we have a set parameter
        if ($request->query->get('set'))
        {
            //If set is at true
            if ($request->query->get('set') === "true")
            {
                $story->setActive(1);
            }
            //If set is false
            elseif($request->query->get('set') === "false")
            {
                $story->setActive(0);
            }
            //If set has another value
            else 
            {
                //We send back a message with a 400 error
                return $this->json(
                ['message' => 'Set parameter only accepts true or false has a value',],
                404
                );
            }
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            //Serialize the data
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);
            $normalizedStory = $serializer->normalize($story, null, ['groups' => 'api_story_detail']);

            //And return the story with the new active status
            return $this->json($normalizedStory, 200);
        }
        else{
            //We send back a message with a 400 error
            return $this->json(
                ['message' => 'Missing set parameter in the url',],
                404
            );
        }

    }

    /**
     * Delete one story with the id parameter
     * 
     * @Route("/api/v0/stories/{id}", name="api_v0_stories_delete", methods={"DELETE"}, requirements={"id":"\d+"})
     */
    public function delete(Story $story)
    {
        //check if user is logged
        $this->denyAccessUnlessGranted('delete', $story);

        //Get back the manager
        $em = $this->getDoctrine()->getManager();
        $em->remove($story);
        $em->flush();

        return $this->json([], 204);
    }

    /**
     * Return time stats for one story
     * 
     * @Route("/api/v0/stories/{id}/time", name="api_v0_stories_time", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function getTime($id, PartyRepository $partyRepository)
    {
        //Get parties for this story, except the ones from the author
        $parties = $partyRepository->findPartiesForStoryStats($id);

        $partyNumber = count($parties);

        //If we have parties
        if ($parties) {

            //Initialize a filtering array
            $filteringTable = [];

            //For each party, save an entry in the filtering array
            //With party id for key and player id for value
            foreach ($parties as $party) {
                $filteringTable[$party->getId()] = $party->getPlayer()->getId();
            }

            //Delete doublons
            //array_unique left the first occurence it finds and delete others
            //So we will keep only the first party the player made for this story
            $uniquePlayerParties = array_unique($filteringTable);

            

            //Create the timeTable with only uniquePlayerParties
            $timeTable = [];

            //For each party
            foreach ($parties as $party) {

                //If it's Id is on of the key of the uniquePlayerParties array
                if (array_key_exists($party->getId(), $uniquePlayerParties))
                {
                    //Add it to the parties time array
                    $timeTable[] = $party->getTime();
                }
                
            }

            $bestTime = min($timeTable);
            $averageTime = intval(array_sum($timeTable) / count($timeTable));

            return $this->json([
                'best' => $bestTime,
                'average' => $averageTime,
                'number' => $partyNumber,
            ]);
        }
        //If we don't have parties
        else {
            return $this->json([],204);
        }
    }

}
