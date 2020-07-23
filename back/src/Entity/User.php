<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("user_show")
     * @Groups("api_story_detail")
     * @Groups("user_login")
     * @Groups("api_party_detail")
     * @Groups("user_create")
     */
    private $id;


    /**
     * The unique property allow to check that we don't have the same email twice
     * @ORM\Column(type="string", length=128, unique=true)
     * @Groups("user_show")
     * @Groups("user_login")
     * @Groups("user_create")
     * @Assert\NotBlank(message="L'email est obligatoire")
     * @Assert\Email(message="Le format de cet email n'est pas valide")
     */
    private $email;


    /**
     * @ORM\Column(type="string", length=64, unique=true)
     * @Groups("user_show")
     * @Groups("user_create")
     * @Groups("api_story_detail")
     * @Groups("user_login")
     * @Groups("api_party_detail")
     * @Assert\NotBlank(message="Le surnom est obligatoire")
     * @Assert\Length(min=3)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("user_show")
     * @Groups("user_login")
     * @Groups("user_create")
     * @Assert\NotBlank(message="Le prenom est obligatoire")
     * @Assert\Length(min=2)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups("user_show")
     * @Groups("user_login")
     * @Groups("user_create")
     * @Assert\NotBlank(message="Le nom est obligatoire")
     * @Assert\Length(min=2)
     */
    private $lastname;

    /**
     * @ORM\Column(type="json")
     * @Groups("user_show")
     * @Groups("user_create")
     * @Groups("user_login")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Le mot de passe est obligatoire")
     * @Assert\Regex("/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/")
     * the regex assert matches only when all the following are true:
     * password must contain 1 number (0-9)
     * password must contain 1 uppercase letters
     * password must contain 1 lowercase letters
     * password must contain 1 non-alpha numeric number
     * password is 8-16 characters with no space
     */
    private $password;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("user_show")
     * @Groups("user_login")
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
     * @ORM\Column(type="string", unique=true , nullable=true)
     * @Groups("user_login")
     * 
     */
    private $apiToken;

    /**
     * @ORM\Column(type="boolean", nullable=true, options={"default" : 0})
     * @Groups("user_show")
     */
    private $isLogged;

    public function __construct()
    {
        $this->stories = new ArrayCollection();
        $this->playedParties = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
     * Get the value of apiToken
     */
    public function getApiToken()
    {
        return $this->apiToken;
    }

    /**
     * Set the value of apiToken
     *
     * @return  self
     */
    public function setApiToken($apiToken)
    {
        $this->apiToken = $apiToken;

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

    public function getIsLogged(): ?bool
    {
        return $this->isLogged;
    }

    public function setIsLogged(?bool $isLogged): self
    {
        $this->isLogged = $isLogged;

        return $this;
    }

    
}
