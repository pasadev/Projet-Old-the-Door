<?php

namespace App\Repository;

use App\Entity\Story;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Story|null find($id, $lockMode = null, $lockVersion = null)
 * @method Story|null findOneBy(array $criteria, array $orderBy = null)
 * @method Story[]    findAll()
 * @method Story[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Story::class);
    }

    // /**
    //  * @return Story[] Returns an array of Story objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */


    public function findActiveStories($number = null)
    {
        //Initialize query Builder
        $qb = $this->createQueryBuilder('story');
        $qb->orderBy('story.id', 'DESC');
        $qb->where('story.active = true');

        //If we have a number limit in parameter
        if ($number) {
            $qb->setMaxResults($number);
        }

        //leftJoin to reduce requests number
        $qb->leftJoin('story.author', 'user');
        $qb->addSelect('user');

        //Get the query
        $query = $qb->getQuery();
        //Return the results
        return $query->getResult();
    }

    public function findForAuthor($authorId)
    {
        //Initialize query Builder
        $qb = $this->createQueryBuilder('story');
        $qb->orderBy('story.id', 'DESC');
        $qb->where('story.author = :authorId');
        $qb->setParameter('authorId', $authorId);

        //leftJoin to reduce requests number
        $qb->leftJoin('story.author', 'user');
        $qb->addSelect('user');

        //Get the query
        $query = $qb->getQuery();
        //Return the results
        return $query->getResult();
    }
}
