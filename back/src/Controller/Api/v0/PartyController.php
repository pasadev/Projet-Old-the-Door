<?php

namespace App\Controller\Api\v0;

use App\Entity\Party;
use App\Form\PartyType;
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

    /**
     * Add a party in DB
     * 
     * @Route("/api/v0/parties", name="api_v0_parties_add", methods={"POST"})
     *
     * @param Request $request
     * @param ObjectNormalizer $normalizer
     * @return Party
     */
    public function add(Request $request, ObjectNormalizer $normalizer)
    {
        //check if user is logged
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        
        //Create an empty party
        $party = new Party();

        //Create the associating form to send request data in the party
        //With the csrf option desactivated as we are on an API
        $form = $this->createForm(PartyType::class, $party, ['csrf_protection' => false]);

        //Extract the json content of the request
        $jsonText = $request->getContent();

        //Transform this Json in array
        $jsonArray = json_decode($jsonText, true);

        //Submit this data array to the form
        $form->submit($jsonArray);

        //Verify if the form is valid
        if ($form->isValid())
        {
            //Set a created date
            $party->setCreatedAt(new \DateTime());

            //If it is valid, we persists and flush
            $em = $this->getDoctrine()->getManager();
            $em->persist($party);
            $em->flush();


            //Then, we return 201 HTTP code with the Party Object created

            //Serialize the data
            $serializer = new Serializer([new DateTimeNormalizer(), $normalizer]);

            $normalizedParty = $serializer->normalize($party, null, ['groups' => 'api_party_detail']);

            //And return it
            return $this->json($normalizedParty, 201);

        }

        //If it is not valid
        //We display errors
        //With a 400 Bad request HTTP code
        return $this->json((string) $form->getErrors(true, false), 400);

    }
}
