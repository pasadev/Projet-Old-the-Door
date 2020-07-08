<?php

namespace App\Form;

use App\Entity\Party;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartiesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('time')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('player')
            ->add('forStory')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Party::class,
        ]);
    }
}
