<?php

namespace App\Controller\Api\v0;

use App\Entity\Story;
use App\Repository\StoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class StoryController extends AbstractController
{
    /**
     * Return all stories
     * 
     * @Route("/api/v0/stories", name="api_v0_stories_list", methods={"GET"})
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
                $normalizedStories
            ]);
        }
        //If we have not found any stories
        else
        {
            //We send back a message with a 404 error
            return $this->json(
                ['message' => 'We have not found any stories',],
                404
            );
        }
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
     * Delete one story with the id parameter
     * 
     * @Route("/api/v0/stories/{id}", name="api_v0_stories_delete", methods={"DELETE"}, requirements={"id":"\d+"})
     */
    public function delete(Story $story)
    {

        //Get back the manager
        $em = $this->getDoctrine()->getManager();
        $em->remove($story);
        $em->flush();

        return $this->json([], 204);
        //TODO: Voir pour l'erreur sur le delete dans le cas d'une histoire qui a des chapitres
    }
}
