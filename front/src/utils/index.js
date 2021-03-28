export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// I guess I gotta put my function in here?
export const checkAnswer = (keyGuess, lockGuess, keyAnswer, lockAnswer) => {
  if ((keyGuess !== '') && (lockGuess !== '')) {
    if (keyGuess.trim().toLowerCase() === keyAnswer.trim().toLowerCase()
    && lockGuess.trim().toLowerCase() === lockAnswer.trim().toLowerCase()) {
      return true;
    }
    return false;
  }
  return 'no_value';
};

// Check if keyword and lockword are in the content
export const checkWordInContent = (word, content) => {
  const regex = /[,.;!?"'+*/']+/gi;

  // Content
  const contentLowerCase = content.toLowerCase();
  const contentReplace = contentLowerCase.replace(regex, ' ');
  const contentTrim = contentReplace.trim();
  const contentSplit = contentTrim.split(' ');

  // Word
  const wordTrim = word.trim();
  const wordLowerCase = wordTrim.toLowerCase();

  // Check
  const checked = contentSplit.includes(wordLowerCase);

  return checked;
};

export const asideData = {
  storyCreate: {
    title: 'Création d\'une aventure',
    content: 'Une aventure est constituée d\'un titre, d\'un synopsis, d\'une description. Le synopsis est un résumé visible lorsque l\'aventure est listée sur une autre page et la description est le texte détaillé visible seulement sur la page de l\'aventure',
  },
  storyEdit: {
    title: 'Edition d\'une aventure',
    content: 'Une aventure est constituée de chapitres. Le premier chapitre créé sera le premier chapitre de l\'aventure et est nécessaire pour jouer. Vous pouvez créer d\'autres chapitres et les ordonner en leur assignant des chapitres parents. Exemple : Sur mon aventure, je crée un premier chapitre "La cave", ça sera le début de l\'aventure. Je crée un deuxième chapitre "Le couloir", je lui choisis en chapitre parent "La cave" pour le mettre à la suite. Pour un chapitre, le mot clé et le mot serrure doivent être présents dans son contenu. La clé serait l\'élément actif et la serrure l\'élément passif. Pour débloquer un chapitre, il faut combiner la bonne clé et à la bonne serrure. Par exemple: Loupe / Papier => On utilise la loupe pour lire un texte caché pour aller au chapitre suivant. Le message de réussite est un petit texte d\'ambiance pour faire la liaison avec le prochain chapitre ou clôturer l\'aventure. Dans notre exemple précédent, il pourrait contenir le texte lisible grâce à la loupe.',
  },
  gameScreen: {
    title: 'Jouer à une aventure',
    content: 'Vous êtes confronté au premier chapitre d\'une histoire. Vous devez, grâce à une combinaison de mots Clé / Serrure, déverouiller chacun des chapitres jusqu\'à la fin de l\'aventure. Par exemple "Une loupe" permet de lire un texte caché sur "Un papier". Un timer permet de voir votre temps sur l\'aventure. Si vous tentez une mauvaise combinaison, vous aurez une pénalité de 1 minute. Si vous êtes bloqué, vous avez la possibilité d\'afficher un indice contre une pénalité de 5 minutes, une fois par chapitre.',
  },
};

// http://damien-toscano.vpnuser.lan:8000
// http://maxence-royer.vpnuser.lan:8000
// https://localhost:8000
export const baseURL = 'https://localhost:8000';
