<?php

namespace App\Controller\Api\v0;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class UserController extends AbstractController
{
    /**
     * @Route("/api/v0/users/{id}", name="api_v0_users_show" , methods={"GET"} , requirements={"id":"\d+"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function show(ObjectNormalizer $normalizer ,User $user)
    {
        
        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_show']);

        

        return $this->json([
            $normalizedUser
        ]);
    }
}
