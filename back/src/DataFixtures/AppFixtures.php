<?php

namespace App\DataFixtures;

use App\Entity\Chapter;
use App\Entity\Party;
use App\Entity\Story;
use App\Entity\User;
use App\Service\Slugger;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $passwordEncoder;
    private $slugger;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, Slugger $slugger)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->slugger = $slugger;
    }


    public function load(ObjectManager $manager)
    {
        //Set a story title array
        $titles = [
            'Le chateau de la mort',
            'Le donjon de naheulbeuk',
            'la cité de la peur',
            'Le train maudit',
            'La pierre de feu',
            'L\'apothéose des développeurs',
            'L\'histoire de kaamelott',
            'Un jour pas comme les autres',
            'la vallée hurlante'
        ];

        // list of synospis story.
        $synopsis = [
            'Un lieu etrange , ou des inscriptions bizarre ornent les murs, des bruits plus qu\'inquiétant.... Pas de doutes, Nous somme bien dans un lieu ou nos vies vont dépendrent de nos reflexions!  ',

            'Célèbre histoire déjà compter plusieurs fois au travers des ages, mais cette fois le héros , c\'est vous!!! Le nain , l\'elfe, l\'ogre ou même la sorcière, jouez le rôle que vous voulez, seul votre réflexion vous feras venir a bout de cette aventure... ou a bout de vos compagnons de route.....',

            'Résolvez l\'assassinat du projectionniste du film "Red Is Dead",en incarnant le très connu Serge Karamazov." Parlez moi de vous plutôt. - Odile ! Moi c\'est Odile ! Pluto c\'est l\'ami de Mickey ! - Ah non ! Pluto c\'est le chien de Mickey ! L\'ami de Mickey c\'est Dingo !',

            'Ca roule vite , très vite , et si vous ne trouvais pas ce qui cloche dans ce train avant la fin du parcour , il est possible que personne n\'arrive au terminus! ',

            "L'histoire d'un bijoux qui se transmet de générations en générations , sans jamais avoir dévoilé ses secrets. Mais Dès que vous le porté , il  se passe des choses étranges, des phénomènes... comme paranormaux. En recherche de réponses , vous plongez dans l'arbre généalogique de votre famille afin d'élucider ce mystère qu'est le bijoux que l'on appel 'La pierre de feu'.... ",

            "Une histoire de 5 personnes, qui par delas toutes les péripécies, vont devoir résoudre des énignes , des problèmes, afin de produire un projet tout droit sortie des années old school. Eluder avec eux les conflits, les erreurs et les énignes afin de pouvoir réaliser un projet abouti !",
            
            "Je lui ai garôché une estie de garnotte en plein dans sa crisse de face de crosseur, il en menait pas large je te jure. Bon, câlisse, tu vas-tu me crisser patience ? Toryeu que c'est cheap cette esti de cochonnerie-là.",
            
            "Les crottes de fromage, bien sqouick sqouick dans yeule, c'est ça le bonheur. Je crisse mon camp d'icite anyway, je déguedine au plus sacrant, ça sent la cibole de marde.",

            "Osti qui fa frette. Mon char est resté pogné dans crisse de slotche toute la nuite. Mâ t'en faire moé des patentes de même, tu vas m'entendre baptinse.",

        ];
        
        //Set a list of description
        $descriptions = [
            "Alors vous allez peut-être me dire que maintenant ils croient qu'on est là-bas? Sinon on fait un tunnel jusqu'à notre campement. Léodagan et moi on creuse, pendant vous balancez de la caillasse dans l'autre sens pour les éloigner du chantier. Ah il faut la tenter celle-là! On vous met une dague sous le cou et on traverse le camp en gueulant 'bougez-pas, bougez-pas ou un bute le roi'.",

            "Encore une chance qu’on se soit pas fait construire un buffet à vaisselle. Ah ah Sire! Je vous attends! À moins que vous préfériez qu’on dise partout que le roi est une petite pédale qui pisse dans son froc à l’idée d’se battre! Mais on en entend parler dans les tavernes à ivrognes! Voilà! Ben quoi? C’est pas si grave que ça!",

            "La vache! Ca vous rend pas aimable en tout cas, hein! C’est une tarte aux myrtilles. Pourquoi elle vous revient pas? Mais vous êtes complètement con? C’est du patrimoine ça? On dit que là où il passe l’herbe ne repousse pas! Mais on en entend parler dans les tavernes à ivrognes! Voilà! Et si on faisait le coup du bouclier humain?",

            "Ouais, y a pas à dire, quand y a du dessert le repas est tout de suite plus chaleureux! Merde! S'ils ont entendu mon plan c'est foutu. C’est la salle du trône. Il ferait beau voir que je puisse pas y rentrer! Alors là, personne sait qui est tombé et tout le monde s’en fout! Sire, mon père était peut-être unijambiste mais, moi, ma femme a pas de moustache! Moi je passe pas mal de temps à la taverne. J’ai jamais entendu parlé de celui-là!",

            "La ferme! Mais bien sûr, comme ça au lieu de confondre les signes, ils auraient confondu les couleurs! P’tite pucelle! Non, j’vais varier les fruits, n’vous inquiétez pas. Y a quand même pas cinquante trucs à retenir bon sang! A genoux, pas à genoux c’est une chose... Enfin en attendant je vous donne pas tout notre or. Vous savez c’est quand de même pas grave de pas savoir faire des tartes! Qu’est ce que vous nous chantez? Vous êtes pas gaulois que je sache!",

            "Alors vous allez peut-être me dire que maintenant ils croient qu'on est là-bas? C’est quand même pas de bol pour lui, hein. Parce que les rares fois où il arrive à faire quelque chose de ses dix doigts, il se goure quand on lui demande son nom. On dit que là où il passe l’herbe ne repousse pas! Y en a marre de se comporter comme des sagouins avec tout le monde sous prétexte qu’on a des responsabilités. Vous allez me faire le plaisir devous remuez un peu les miches, Sire, j’ai l’impression de me battre contre une vieille! P’tite pucelle!",

            "On vous met une dague sous le cou et on traverse le camp en gueulant 'bougez-pas, bougez-pas ou un bute le roi'. Là c’est une table ronde. Pour que les chevaliers de Bretagne se réunissent autour. Toute façon autant vous y faire parce qu’à partir de maintenant on va s’appeler «Les Chevaliers de la Table Ronde». Qu’est ce que j’ai dit? Une connerie? Alors vous allez peut-être me dire que maintenant ils croient qu'on est là-bas? Mais qu’est c’que ça peut vous foutre, de toute façon, c’est pas vous qui l’avez faite, si? Et si on faisait le coup du bouclier humain?",

            "Vous allez me faire le plaisir devous remuez un peu les miches, Sire, j’ai l’impression de me battre contre une vieille! Encore une chance qu’on se soit pas fait construire un buffet à vaisselle. P’tite pucelle! Pas foutu de savoir son nom!",

            "Y a quand même pas cinquante trucs à retenir bon sang! Déjà à la corne, ils regardent même pas vers ici! Vous pouvez bien agiter tout les drapeaux que vous voudrez! Ah mais non, on va se faire tuer là! Ah ben non tant que vous nous obligez pas à les manger! Je suis chef de guerre moi, je suis pas là pour secouer des drapeaux et jouer de la trompette. Alors dites vous que c’est un combat réel et montrez-moi ce que vous avez dans l’slibard! Passer la tête? Pour me prendre une flêche dedans? Non merci!",
        ];

        $chapterTitles = [
            "Le démon bleu",
            "La comode",
            "Le grenier",
            "La cave",
            "L'arbre creux",
            "Le ciel embrumé",
        ];

        $chapterContents = [
            "C’est la salle du trône. Il ferait beau voir que je puisse pas y rentrer! Ah, ben tourné vers là-bas c'est sûr, moi non plus je vois rien. Là c’est une table ronde. Pour que les chevaliers de Bretagne se réunissent autour. Toute façon autant vous y faire parce qu’à partir de maintenant on va s’appeler «Les Chevaliers de la Table Ronde». On construit un barrage, après on lance de la caillasse de l'autre côté de la rivière pour faire croire aux autres qu'on a traversé dans l'autre sens, une fois qu'ils sont au milieu, on casse le barrage et on les noie.",
            "A genoux, pas à genoux c’est une chose... Enfin en attendant je vous donne pas tout notre or. Mais parce qu’on a des frais! Vous pouvez pas vous rentrer ça dans le crâne? C’est la salle du trône. Il ferait beau voir que je puisse pas y rentrer! Je suis chef de guerre moi, je suis pas là pour secouer des drapeaux et jouer de la trompette. Ouais le problème c'est qu'on a passé quatre semaines à construire un barrage, ça fait un peu mal au cul de le détruire.",
            "Y a des gens qui ont pris la peine de faire un dessert. La moindre des choses c’est de rester pour le manger. Moi je passe pas mal de temps à la taverne. J’ai jamais entendu parlé de celui-là! Bon alors en garde, fils d’unijambiste. Vous avez dit que ça devait être vexant! Ben voilà! Vous êtes vexé! On plaisante, on plaisante… Ca vous emmerde ce que j’raconte?",
            "Qu’est ce que vous nous chantez? Vous êtes pas gaulois que je sache! Vous savez c’est quand de même pas grave de pas savoir faire des tartes! S’il vous plait! Faites pas votre mijoré! Moi je me fais traiter de gonzesse j’en fais pas tout un cake! Ah il faut la tenter celle-là! Encore une chance qu’on se soit pas fait construire un buffet à vaisselle.",
            "Ben évidemment que c’est vrai! Vous avez jamais dit que ça devait être faux! Très exactement c’est «Provençal le Gaulois». Faut faire comme avec les scorpions qui se suicident quand ils sont entourés par le feu. Et on peut savoir depuis quand vous arpentez la Bretagne en racontant à tout le monde que vous vous appelez Provençal le Gaulois? Mais vous êtes complètement con?",
            "Sire, mon père était peut-être unijambiste mais, moi, ma femme a pas de moustache! Alors là! Permettez-moi de vous dire! Le coup du mystérieux chevalier gaulois solitaire à la rescousse de l’opprimé. Ca fait vraiment bidon comme légende! Et si on faisait le coup du bouclier humain? Mais ils ont pas le droit de décider de la retraite eux-mêmes! On l’a dit et redit ça!",
        ];

        $chapterKeyWords = [
            "Lampe",
            "Briquet",
            "Clé",
            "Torche",
            "Marteau",
            "Oeil de verre",
            "Biscotte",
        ];
        
        $chapterLockWords = [
            "Serrure",
            "Bibliothèque",
            "Mug",
            "Papier vierge",
            "Vase",
            "Boite en carton",
            "Chat",
        ];

        $chapterUnlockTexts = [
            "Bravo, vous avez dévérouillé le chapitre suivant",
            "Tel un brave aventurier, votre ennemi a trépassé",
            "Fichtre, et la lumière fut",
            "Vous pouvez être fier de vous, c'est pas n'importe qui qui aurait pu faire ça",
        ];

        /*  USERS  */

        // User email
        $usersEmail = [
            "maxenceroyer@gmail.com",
            "damien@gmail.com",
            "tony@gmail.com",
            "hugo@gmail.com",
            "jukka@gmail.com",
            "michu@gmail.com"
        ];

        $usersFirstname = [
            "Maxence",
            "Damien",
            "Tony",
            "Hugo",
            "Jukka",
            "Michu",
        ];

        $usersLastname = [
            'Royer',
            'Toscano',
            'Hebert',
            'liger',
            'Panasen',
            'Madame',
        ];

        $usersPassword = [
            'maxence',
            'damien',
            'tony',
            'hugo',
            'jukka',
            'michu'
        ];

        $usersUsername = [
            'Max-ans',
            'Dam\'s',
            'TonaÏ',
            'hugO',
            'JuKKa',
            'Mam MichU'
        ];

        /*  End USERS  */

        // Create a author list 
        $authorsList = [];
        
        // Create a stories list
        $storiesList = []; 

        /* Authors creation loop */
        for ($indexUser = 0; $indexUser < count($usersEmail); $indexUser++)
        {
            $author = new User();
            $author->setEmail($usersEmail[$indexUser]);
            $author->setEmail($usersEmail[$indexUser]);
            $author->setFirstname($usersFirstname[$indexUser]);
            $author->setLastname($usersLastname[$indexUser]);
            $author->setUsername($usersUsername[$indexUser]);
            $author->setPassword($this->passwordEncoder->encodePassword($author, $usersPassword[$indexUser]));
            $author->setCreatedAt(new DateTime());
            $author->setApiToken(uuid_create(UUID_TYPE_RANDOM));

            // add this users in author list.
            $authorsList[] = $author;
            $manager->persist($author);
        }

        /* Stories creation loop */
        for ($indexStories = 0; $indexStories < count($titles); $indexStories++) {
            $story = new Story();
            $story->setTitle($titles[$indexStories]);
            $story->setSynopsis($synopsis[$indexStories]);
            $story->setDescription($descriptions[$indexStories]);
            $story->setActive(mt_rand(0, 1));
            $story->setCreatedAt(new DateTime());
            $story->setSlug($this->slugger->slugify($titles[$indexStories]));
            $story->setAuthor($authorsList[array_rand($authorsList,1)]);

            //Initialize chapter array
            $chaptersList = [];

            //Set Chapters
            for ($indexChapter = 0; $indexChapter <= mt_rand(1, 4); $indexChapter++)
            {
                //Create a new chapter
                $chapter = new Chapter();

                //Set data in fixtures
                //We get datas from a fixture array above
                $chapter->setTitle($chapterTitles[array_rand($chapterTitles,1)]);
                $chapter->setContent($chapterContents[array_rand($chapterContents,1)]);
                $chapter->setKeyWord($chapterKeyWords[array_rand($chapterKeyWords,1)]);
                $chapter->setLockWord($chapterLockWords[array_rand($chapterLockWords,1)]);
                $chapter->setUnlockText($chapterUnlockTexts[array_rand($chapterUnlockTexts,1)]);
                $chapter->setCreatedAt(new \DateTime());
                $chapter->setForStory($story);

                //If we are at least at the second loop
                if ($indexChapter > 0)
                {
                    //Set the parent chapter
                    $chapter->setParentChapter($chaptersList[$indexChapter -1]);
                }
            
                //Set the first chapter id for the current story
                //Only for the first chapter
                if ($indexChapter == 0)
                {
                    //Set the First chapter
                    $story->setFirstChapter($chapter);
                }

                //Save the chapter in the chaptersList
                $chaptersList[] = $chapter;

                $manager->persist($chapter);
            }

            $storiesList[] = $story;
            $manager->persist($story);
        }


        for ($indexParty = 0 ; $indexParty < 25 ; $indexParty++ ){

            // create a new Party
            $party = new Party();
            
            $party->setTime(mt_rand(60 , 10000 ));
            $party->setCreatedAt(new DateTime());
            $party->setPlayer($authorsList[array_rand($authorsList, 1)]);
            $party->setForStory($storiesList[array_rand($storiesList, 1)]);

            $manager->persist($party);
        }

        $manager->flush();
    }
}
