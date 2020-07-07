<?php

namespace App\Repository;

use App\Entity\Chapter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Chapter|null find($id, $lockMode = null, $lockVersion = null)
 * @method Chapter|null findOneBy(array $criteria, array $orderBy = null)
 * @method Chapter[]    findAll()
 * @method Chapter[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChapterRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Chapter::class);
    }

    // /**
    //  * @return Chapter[] Returns an array of Chapter objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    // Method for get chapters with his story with one request
    public function findChaptersForStory ($storyId)
    {
        //Initialize query Builder
        $qb = $this->createQueryBuilder('chapter');
        $qb->where('chapter.forStory = :storyId');

        // leftJoin for reduce requests number
        $qb->leftJoin('chapter.forStory', 'story');
        $qb->addSelect('story');

        //indicated value of storyId token
        $qb->setParameter('storyId', $storyId);


        // get query
        $query = $qb->getQuery();

        //return result of query
        return $query->getResult();
    }

    //Method to get the child chapter of the given chapter
    public function findChildChapter($chapterId)
    {
        //Initialize query Builder
        $qb = $this->createQueryBuilder('chapter');
        $qb->where('chapter.parentChapter = :chapterId');

        // leftJoin to reduce requests number
        $qb->leftJoin('chapter.forStory', 'story');
        $qb->addSelect('story');

        //Set the chapter id parameter
        $qb->setParameter('chapterId', $chapterId);

        // get query
        $query = $qb->getQuery();

        //return result of query
        return $query->getOneOrNullResult();
    }
}
