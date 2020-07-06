<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("user_show")
     * @Groups("api_story_detail")
     */
    private $id;

    /**
     * The unique property allow to check that we don't have the same email twice
     * @ORM\Column(type="string", length=128, unique=true)
     * @Groups("user_show")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("user_show")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("user_show")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user_show")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=64, nullable=true)
     * @Groups("user_show")
     */
    private $role;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("user_show")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Story::class, mappedBy="author")
     * @Groups("user_show")
     */
    private $stories;

    /**
     * @ORM\OneToMany(targetEntity=Party::class, mappedBy="player")
     * @Groups("user_show")
     */
    private $playedParties;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("user_show")
     * @Groups("api_story_detail")
     */
    private $nickname;

    public function __construct()
    {
        $this->stories = new ArrayCollection();
        $this->playedParties = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;

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

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(string $nickname): self
    {
        $this->nickname = $nickname;

        return $this;
    }

    /**
     * @return Collection|Story[]
     */
    public function getStories(): Collection
    {
        return $this->stories;
    }

    public function addStory(Story $story): self
    {
        if (!$this->stories->contains($story)) {
            $this->stories[] = $story;
            $story->setAuthor($this);
        }

        return $this;
    }

    public function removeStory(Story $story): self
    {
        if ($this->stories->contains($story)) {
            $this->stories->removeElement($story);
            // set the owning side to null (unless already changed)
            if ($story->getAuthor() === $this) {
                $story->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Party[]
     */
    public function getPlayedParties(): Collection
    {
        return $this->playedParties;
    }

    public function addPlayedParty(Party $playedParty): self
    {
        if (!$this->playedParties->contains($playedParty)) {
            $this->playedParties[] = $playedParty;
            $playedParty->setPlayer($this);
        }

        return $this;
    }

    public function removePlayedParty(Party $playedParty): self
    {
        if ($this->playedParties->contains($playedParty)) {
            $this->playedParties->removeElement($playedParty);
            // set the owning side to null (unless already changed)
            if ($playedParty->getPlayer() === $this) {
                $playedParty->setPlayer(null);
            }
        }

        return $this;
    }

  
}
