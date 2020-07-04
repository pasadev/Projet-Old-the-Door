<?php

namespace App\Entity;

use App\Repository\StoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=StoryRepository::class)
 */
class Story
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     * @Groups("user_show")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     * @Groups("user_show")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $synopsis;

    /**
     * The Default : 0 indicate that all stories will be inactive by default
     * @ORM\Column(type="boolean", options={"default" : 0})
     */
    private $active;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * 
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Chapter::class, mappedBy="forStory")
     */
    private $hasChapters;

    /**
     * @ORM\OneToOne(targetEntity=Chapter::class, cascade={"persist", "remove"})
     */
    private $firstChapter;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="stories")
     */
    private $author;

    /**
     * @ORM\OneToMany(targetEntity=Party::class, mappedBy="forStory")
     */
    private $hasParties;

    public function __construct()
    {
        $this->hasChapters = new ArrayCollection();
        $this->hasParties = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSynopsis(): ?string
    {
        return $this->synopsis;
    }

    public function setSynopsis(string $synopsis): self
    {
        $this->synopsis = $synopsis;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

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

    /**
     * @return Collection|Chapter[]
     */
    public function getHasChapters(): Collection
    {
        return $this->hasChapters;
    }

    public function addHasChapter(Chapter $hasChapter): self
    {
        if (!$this->hasChapters->contains($hasChapter)) {
            $this->hasChapters[] = $hasChapter;
            $hasChapter->setForStory($this);
        }

        return $this;
    }

    public function removeHasChapter(Chapter $hasChapter): self
    {
        if ($this->hasChapters->contains($hasChapter)) {
            $this->hasChapters->removeElement($hasChapter);
            // set the owning side to null (unless already changed)
            if ($hasChapter->getForStory() === $this) {
                $hasChapter->setForStory(null);
            }
        }

        return $this;
    }

    public function getFirstChapter(): ?Chapter
    {
        return $this->firstChapter;
    }

    public function setFirstChapter(?Chapter $firstChapter): self
    {
        $this->firstChapter = $firstChapter;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    /**
     * @return Collection|Party[]
     */
    public function getHasParties(): Collection
    {
        return $this->hasParties;
    }

    public function addHasParty(Party $hasParty): self
    {
        if (!$this->hasParties->contains($hasParty)) {
            $this->hasParties[] = $hasParty;
            $hasParty->setForStory($this);
        }

        return $this;
    }

    public function removeHasParty(Party $hasParty): self
    {
        if ($this->hasParties->contains($hasParty)) {
            $this->hasParties->removeElement($hasParty);
            // set the owning side to null (unless already changed)
            if ($hasParty->getForStory() === $this) {
                $hasParty->setForStory(null);
            }
        }

        return $this;
    }

    
}
