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
        if ($request->query->get('user_id')) {
            $userId = $request->query->get('user_id');

            //Get all the parties for this user
            $parties = $partyRepository->findBy(["player" => $userId]);

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
                return $this->json([
                    'message' => 'We have not find any parties',
                ]);
            }
        }

        return $this->json([
            'message' => 'Please use a user_id GET parameter to choose for which user who want the parties',
        ]);
    }
}
