<?php

namespace App\Controller\Api\v0;

use App\Repository\PartyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class PartyController extends AbstractController
{
    /**
     * Return all parties for one user
     * 
     * @Route("/api/v0/parties", name="api_v0_parties", methods={"GET"})
     */
    public function list(PartyRepository $partyRepository, Request $request, ObjectNormalizer $normalizer)
    {

        //Get the user_id parameter
        if ($request->query->get('user_id')) 
        {
            $userId = $request->query->get('user_id');

            //Get all the parties for this user
            $parties = $partyRepository->findPartiesForUser($userId);

            //If we have parties to send
            if ($parties) {
                //Starting the serializer
                //With the dateTimeNormalizer to send creationDate
                $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

                //Normalize the parties collection
                $normalizedParties = $serializer->normalize($parties, null, ['groups' => 'api_party_detail']);

                //Return all parties    
                return $this->json([
                    $normalizedParties
                ]);
            }
            //If we don't have parties
            else
            {
                //We send back a message with a 404 error
                return $this->json(
                    ['message' => 'We have not found any parties',],
                    404
                );
            }
        }

        //If we don't have the parameter user_id in the request
        //Send back a 400 bad request answer
        return $this->json(
            ['message' => 'Bad Request, please use a user_id GET parameter ',],
            400
        );
    }
}
