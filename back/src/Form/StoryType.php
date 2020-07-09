<?php

namespace App\Form;

use App\Entity\Chapter;
use App\Entity\Story;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'title',
                TextType::class,
            )
            ->add(
                'synopsis',
                TextareaType::class,
            )
            ->add(
                'active',
                TextType::class,
            )
            ->add(
                'firstChapter',
                EntityType::class,
                [
                    'class' => Chapter::class,
                    //On utilise une requête personnalisé, voir si on en a besoin
                    /* 'choice_label' => 'title' */
                ]
            )
            ->add(
                'author',
                EntityType::class,
                [
                    'class' => User::class,
                    //On utilise une requête personnalisé, voir si on en a besoin
                    /* 'choice_label' => 'username' */
                ]
            )
            ->add(
                'description',
                TextAreaType::class,
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Story::class,
        ]);
    }
}
