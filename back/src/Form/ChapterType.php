<?php

namespace App\Form;

use App\Entity\Chapter;
use App\Entity\Story;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChapterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'title',
                TextType::class,
            )
            ->add(
                'content',
                TextareaType::class,
            )
            ->add(
                'keyword',
                TextType::class,
            )
            ->add(
                'lockword',
                TextType::class,
            )
            ->add(
                'unlockText',
                TextareaType::class,
            )
            ->add(
                'forStory',
                EntityType::class,
                [
                    'class' => Story::class,
                ]
                )
            ->add(
                'parentChapter',
                EntityType::class,
                [
                    'class' => Chapter::class,
                ]
            );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Chapter::class,
        ]);
    }
}
