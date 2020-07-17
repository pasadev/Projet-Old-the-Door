<?php

namespace App\Controller\Api\v0;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * Get a user details
     * 
     * @Route("/api/v0/users/{id}", name="api_v0_users_show" , methods={"GET"} , requirements={"id":"\d+"})
     */
    public function show(ObjectNormalizer $normalizer ,User $user)
    {
        
        $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

        $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_show']);


        return $this->json([
            $normalizedUser,
        ]);
    }

    /**
     * Add User
     * 
     * @Route("api/v0/users" , name="api_v0_users_add" , methods={"POST"})
     */
    public function add (Request $request, ObjectNormalizer $normalizer, UserPasswordEncoderInterface $passwordEncoder, UserRepository $userRepository)
    {
        //Create a new user without informations
        $user = new User();

        // create the form which depends User Entity. crsf protection is desactivated because we are in API context
        $form = $this->createForm(UserType::class, $user,['csrf_protection' => false]);

        //Get datas send in request
        $jsonText = $request->getContent();

        //Transform jsonText in array
        $jsonArray = json_decode($jsonText, true);

        if ($userRepository->findOneBy(['email' => $jsonArray['email']]) || $userRepository->findOneBy(['username' => $jsonArray['username']]))
        {
            return $this->json([
                "message" => "Invalid request"
                ],400 ); 
        }

        //We submit this data array to the form
        $form->submit($jsonArray);

        //if form is valid with constraints in user Entity
        if ($form->isValid()){

            //set User date creation
            $user->setCreatedAt(new \DateTime());

            //set User apiToken
            $uuid = uuid_create(UUID_TYPE_RANDOM);
            $user->setApiToken($uuid);


            //get password User send in request
            $passwordUser = $user->getPassword();
            //encoding passwordUser
            $user->setPassword($passwordEncoder->encodePassword($user, $passwordUser));
            
            

            //If it is valid, we persists and flush
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            //Serialize the data
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedUser = $serializer->normalize($user, null, ['groups' => 'user_create']);

            
            //And return it
            return $this->json($normalizedUser, 201);
        }

        //If it is not valid
        //We display errors
        //With a 400 Bad request HTTP code
        return $this->json([
            "message" => "Invalid request"
            ],400 ); 
    }
}
