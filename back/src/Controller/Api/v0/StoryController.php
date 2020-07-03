<?php

namespace App\Controller\Api\v0;

use App\Repository\StoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
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
        //Get the stories
        $stories = $storyRepository->findAll();

        //Instanciate the serializer
        $serializer = new Serializer([$normalizer]);
        
        //Normalize the stories collection
        $normalizedStories = $serializer->normalize($stories, null, ['groups' => 'api_list']);

        //Return all stories    
        return $this->json([
            $normalizedStories
        ]);
    }
}
