<?php

namespace App\Entity;

use App\Repository\ChapterRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;




/**
 * @ORM\Entity(repositoryClass=ChapterRepository::class)
 */
class Chapter
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $keyword;

    /**
     * @ORM\Column(type="string", length=128)
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $lockword;

    /**
     * @ORM\Column(type="text")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $unlockText;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Story::class, inversedBy="hasChapters")
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     */
    private $forStory;

    /**
     * @ORM\OneToOne(targetEntity=Chapter::class, orphanRemoval=true)
     * @Groups("chapter_details")
     * @Groups("chapter_list")
     * @MaxDepth(1)
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
