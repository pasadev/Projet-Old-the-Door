<?php

namespace App\Entity;

use App\Repository\StoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=StoryRepository::class)
 */
class Story
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_party_detail")
     * @Groups("api_story_detail")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     * @Groups("user_show")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("api_party_detail")
     * @Groups("api_story_detail")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     * @Groups("user_show")
     * @Assert\NotBlank(message="Le titre est obligatoire")
     * @Assert\Length(min=3)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups("api_story_detail")
     * @Assert\NotBlank(message="Le synopsis est obligatoire")
     * @Assert\Length(min=50)
     */
    private $synopsis;

    /**
     * The Default : 0 indicate that all stories will be inactive by default
     * 1 indicate that the story is active
     * @ORM\Column(type="boolean", options={"default" : 0})
     * @Groups("api_story_detail")
     * @Groups("api_party_detail")
     */
    private $active;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("api_story_detail")
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
     * @JoinColumn(name="chapter_id", referencedColumnName="id", onDelete="CASCADE")
     * @Groups("api_story_detail")
     */
    private $firstChapter;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="stories")
     * @Groups("api_story_detail")
     * 
     */
    private $author;

    /**
     * @ORM\OneToMany(targetEntity=Party::class, mappedBy="forStory")
     */
    private $hasParties;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     * @Groups("api_story_detail")
     * @Groups("api_party_detail")
     * @Groups("chapter_details")
     */
    private $slug;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="La description est obligatoire")
     * @Assert\Length(min=50)
     * @Groups("api_story_detail")
     * @Groups("api_party_detail")
     */
    private $description;

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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

}
