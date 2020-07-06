<?php

namespace App\Entity;

use App\Repository\ChapterRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity(repositoryClass=ChapterRepository::class)
 */
class Chapter
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $keyword;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $lockword;

    /**
     * @ORM\Column(type="text")
     */
    private $unlockText;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Story::class, inversedBy="hasChapters")
     * @JoinColumn(name="story_id", referencedColumnName="id", onDelete="CASCADE")
     */
    private $forStory;

    /**
     * @ORM\OneToOne(targetEntity=Chapter::class)
     * @JoinColumn(name="chapter_id", referencedColumnName="id", onDelete="SET NULL")
     */
    private $parentChapter;

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

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getKeyword(): ?string
    {
        return $this->keyword;
    }

    public function setKeyword(string $keyword): self
    {
        $this->keyword = $keyword;

        return $this;
    }

    public function getLockword(): ?string
    {
        return $this->lockword;
    }

    public function setLockword(string $lockword): self
    {
        $this->lockword = $lockword;

        return $this;
    }

    public function getUnlockText(): ?string
    {
        return $this->unlockText;
    }

    public function setUnlockText(string $unlockText): self
    {
        $this->unlockText = $unlockText;

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

    public function getForStory(): ?Story
    {
        return $this->forStory;
    }

    public function setForStory(?Story $forStory): self
    {
        $this->forStory = $forStory;

        return $this;
    }

    public function getParentChapter(): ?self
    {
        return $this->parentChapter;
    }

    public function setParentChapter(?self $parentChapter): self
    {
        $this->parentChapter = $parentChapter;

        return $this;
    }

    
}
