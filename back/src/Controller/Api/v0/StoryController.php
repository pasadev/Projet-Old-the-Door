<?php

namespace App\Controller\Api\v0;

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
        //If we have a get parameter
        if ($request->query->get('last'))
        {
            $storyNumber = $request->query->get('last');

            //Get the n last stories
            $stories = $storyRepository->findNthLast($storyNumber);
        }
        else 
        {
            //Get the stories
            $stories = $storyRepository->findBy(['active' => true]);
        }


        //Instanciate the serializer
        //Instanciate DateTimeNormalizer to convert the DateTime object propery into sring
        $serializer = new Serializer([new DateTimeNormalizer(),$normalizer]);
        
        //Normalize the stories collection
        $normalizedStories = $serializer->normalize($stories, null, ['groups' => 'api_list']);


        //Return all stories    
        return $this->json([
            $normalizedStories
        ]);
    }
}
