<?php

namespace App\Entity;

use App\Repository\PartyRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass=PartyRepository::class)
 */
class Party
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_party_detail")
     * @Groups("user_show")
     */
    private $id;

    /**
     * @ORM\Column(type="smallint")
     * @Groups("api_party_detail")
     * @Assert\NotBlank(message="Le time est obligatoire")
     */
    private $time;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("api_party_detail")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="playedParties")
     * @Assert\NotBlank(message="Le player est obligatoire")
     * @Groups("api_party_detail")
     */
    private $player;

    /**
     * @ORM\ManyToOne(targetEntity=Story::class, inversedBy="hasParties")
     * @JoinColumn(name="story_id", referencedColumnName="id", onDelete="CASCADE")
     * @Groups("api_party_detail")
     * @Groups("user_show")
     * @Assert\NotBlank(message="La story est obligatoire")
     */
    private $forStory;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTime(): ?int
    {
        return $this->time;
    }

    public function setTime(int $time): self
    {
        $this->time = $time;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getPlayer(): ?User
    {
        return $this->player;
    }

    public function setPlayer(?User $player): self
    {
        $this->player = $player;

        return $this;
    }

    public function getForStory(): ?Story
    {
        return $this->forStory;
    }

    public function setForStory(?Story $forStory): self
    {
        $this->forStory = $forStory;

        return $this;
    }

    
}
