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
        $storieId = $request->query->get('story_id');

        $chapter = $chapterRepository->findBy(['forStory' => $storieId]); 
        
        // dd($chapter);
        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizeChapter = $serializer->normalize($chapter, null, [AbstractObjectNormalizer::ENABLE_MAX_DEPTH => true ,'groups' => 'chapter_list']);

        
        return $this->json([
            $normalizeChapter
        ]);
    }



    /**
     * @Route("/api/v0/chapters/{id}", name="api_v0_chapters_show" , methods={"GET"} , requirements={"id":"\d+"})
     */
    public function show(Chapter $chapter, ObjectNormalizer $normalizer)
    {
        $serializer = new Serializer([new DateTimeNormalizer() , $normalizer]);

        $normalizeChapter = $serializer->normalize($chapter , null , ['groups' => 'chapter_details']);

        return $this->json([
            $normalizeChapter
        ]);
    }
}
