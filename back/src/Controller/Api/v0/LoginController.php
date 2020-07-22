<?php

namespace App\Controller\Api\v0;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class LoginController extends AbstractController
{
    

    /**
     * @Route("/api/v0/login", name="api_v0_login", methods={"POST"})
     */
    public function login(Request $request , UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder, ObjectNormalizer $objectNormalizer)
    {
        // the login road received email and password en return a User if credentials match with user credentials

        //get JSON datas send with request
        $datas = json_decode($request->getContent(),true);

        // if we found a user with his email
        if($userRepository->findBy(['email' => $datas['email'] ])){
            // get user
            $user = $userRepository->findOneBy(['email' => $datas['email']]);

            // if password given in request match with password user
            if ($passwordEncoder->isPasswordValid($user, $datas['password'])){

                $serializer = new Serializer([new DateTimeNormalizer(), $objectNormalizer]);

                $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_login']);

                // we return user in json format
                return $this->json([
                    $normalizedUser,
                ]);
            }
        }

        // if we don't find email adress in database...
        
            // we send this message with status code 404
            return $this->json([
                'message' => 'invalid credentials',
                'status_code' => 404,
            ], 404);
    }

  
}
