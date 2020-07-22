<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class ChapterVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['add', 'edit', 'delete'])
            && $subject instanceof \App\Entity\Chapter;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
      
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'add':
                // check if user is logged and also the author of the related story
                if ($user->getIsLogged() && $user->getId() === $subject->getForStory()->getAuthor()->getId()){
                    // return true or false
                    return true;
                }
                break;

                //check if user is logged and also the author of the related story
            case 'edit':
                if ($user->getIsLogged() && $user->getId() === $subject->getForStory()->getAuthor()->getId()) {
                    // return true or false
                    return true;
                }
                break;

                //check if user is logged and also the author of the related story
            case 'delete':
                if ($user->getIsLogged() && $user->getId() === $subject->getForStory()->getAuthor()->getId()) {
                    // return true or false
                    return true;
                }
                
                break;
        }

        return false;
    }
}
