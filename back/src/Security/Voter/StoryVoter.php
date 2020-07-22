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
        return in_array($attribute, ['edit', 'add', 'delete', 'active', 'showBySlug'])
            && $subject instanceof \App\Entity\Story;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        
        $user = $token->getUser();
     
       

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'edit':
                // if the user is anonymous, do not grant access
                if (!$user instanceof UserInterface) {
                    return false;
                }
                // A user can edit a story IF he is logged and the story's author
                if($user->getIsLogged() && $user->getId() === $subject->getAuthor()->getId()) {
                    // return true or false
                    return true;
                }
                break;
            
            case 'add':
                // if the user is anonymous, do not grant access
                if (!$user instanceof UserInterface) {
                    return false;
                }
                // if user is logged
                if($user->getIsLogged()) {
                    return true;
                }
                break;

            case 'delete':
                // if the user is anonymous, do not grant access
                if (!$user instanceof UserInterface) {
                    return false;
                }
                // if user is logged
                if ($user->getIsLogged() && $user->getId() === $subject->getAuthor()->getId()) {
                    return true;
                }
                break;
                
            case 'active':
                // if the user is anonymous, do not grant access
                if (!$user instanceof UserInterface) {
                    return false;
                }
                // Eventually allow admin users to active / desactive a story later
                // if user is logged and author
                if ($user->getIsLogged() && $user->getId() === $subject->getAuthor()->getId()) {
                    return true;
                }
                break;

            case 'showBySlug':
              
                // if the story isn't active 
                if (!$subject->getActive()){
                    // and if story author isn't the user who try access to story
                    if ($subject->getAuthor()->getId() !== $user->getId()){
                        
                        return false;
                    }    
                }
  
                // if story is active , everybody can see details of story
                  return true;  
         
                break;
        }

        return false;
    }
}
