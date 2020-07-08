<?php
namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;
use Symfony\Component\Security\Guard\AuthenticatorInterface;

class TokenAuthenticator extends AbstractGuardAuthenticator
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    //Called on every request
    //Verify that the request has the header x-auth-token
    public function supports(Request $request)
    {
        return $request->headers->has('X-AUTH-TOKEN');
    }


    // this method get the value of the credential in headers
    public function getCredentials(Request $request)
    {
        return $request->headers->get('X-AUTH-TOKEN');
    }


    // Get User matching with credentials
    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        
        if (null === $credentials) {
            // The token header was empty, authentication fails with HTTP Status
            // Code 401 "Unauthorized"
            return null;
        }

        // if a User is returned, checkCredentials() is called
        //Find the user with the apiToken in BDD and compare it with BDD
        return $this->em->getRepository(User::class)
            ->findOneBy(['apiToken' => $credentials]);
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        // In case of an API token, no credential check is needed.

        // Return `true` to cause authentication success
        return true;
    }


    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        //Because we are on an API, we don't return a response object
        //But just skip to the next step
        // on success, let the request continue
        return null;
    }

    //This method should never be called, as the checkCredientials always answers true
    //Because we are on an API
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $data = [
            // you may want to customize or obfuscate the message first
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())

            // or to translate this message
            // $this->translator->trans($exception->getMessageKey(), $exception->getMessageData())
        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Called when authentication is needed, but it's not sent
     * If a call is made on a route which needs authentification, but there's no credentials
     * It return an error message
     */
    public function start(Request $request, AuthenticationException $authException = null)
    {
        $data = [
            // you might translate this message
            'message' => 'Authentication Required'
        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }

    public function supportsRememberMe()
    {
        //We have to set it at false, because we are in an API contex
        return false;
    }
}