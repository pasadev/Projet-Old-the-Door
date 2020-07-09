<?php

namespace App\Form;

use App\Entity\Party;
use App\Entity\Story;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'time',
                IntegerType::class,
            )
            ->add(
                'player',
                EntityType::class,
                [
                    'class' => User::class,
                ]
            )
            ->add(
                'forStory',
                EntityType::class,
                [
                    'class' => Story::class,
                ]
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Party::class,
        ]);
    }
}
