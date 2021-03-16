<?php

namespace App\Repository;

use App\Entity\Party;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Party|null find($id, $lockMode = null, $lockVersion = null)
 * @method Party|null findOneBy(array $criteria, array $orderBy = null)
 * @method Party[]    findAll()
 * @method Party[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PartyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Party::class);
    }

    // /**
    //  * @return Party[] Returns an array of Party objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /**
     * Return parties found for the user in parameter
     *
     * @param int $userId
     * @return collection
     */
    public function findPartiesForUser($userId)
    {
        //Get the queryBuilder
        $qb = $this->createQueryBuilder('party');
        $qb->where('party.player = :userId');
        $qb->setParameter('userId', $userId);

        //leftJoin to reduce requests number
        $qb->leftJoin('party.forStory','story');
        $qb->addSelect('story');

        //Get the query
        $query =$qb->getQuery();
        //Return the result
        return $query->getResult();
    }

    /**
     * Return parties for found one story except one for the author
     *
     * @param int $StoryId
     * @return collection
     */
    public function findPartiesForStoryStats($StoryId)
    {
        $qb = $this->createQueryBuilder('party');
        $qb->where('party.player != story.author');
        $qb->andWhere('party.forStory = :storyId');
        $qb->setParameter('storyId', $StoryId);

        $qb->innerJoin('party.forStory','story');
        $qb->addSelect('story');

        $query = $qb->getQuery();
        return $query->getResult();
    }

}
