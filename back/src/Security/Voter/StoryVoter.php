<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class StoryVoter extends Voter
{
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['edit', 'add', 'delete', 'active'])
            && $subject instanceof \App\Entity\Story;
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
            case 'edit':
                // A user can edit a story IF he is logged and the story's author
                if($user->getIsLogged() && $user->getId() === $subject->getAuthor()->getId()) {
                    // return true or false
                    return true;
                }
                break;
            
            case 'add':
                // if user is logged
                if($user->getIsLogged()) {
                    return true;
                }
                break;

            case 'delete':
                // if user is logged
                if ($user->getIsLogged() && $user->getId() === $subject->getAuthor()->getId()) {
                    return true;
                }
                break;
                
            case 'active':
                // Eventually allow admin users to active / desactive a story later
                // if user is logged and author
                if ($user->getIsLogged() && $user->getId() === $subject->getAuthor()->getId()) {
                    return true;
                }
                break;
        }

        return false;
    }
}
