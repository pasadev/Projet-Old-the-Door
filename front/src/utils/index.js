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
    title: 'create',
    content: 'fsdfsdfsdfsdf',
  },
  storyEdit: {
    title: 'edit',
    content: 'fsdfsdfsdfsdf',
  },
  gameScreen: {
    title: 'game',
    content: 'fsdfsdfsdfsdf',
  },
};

// http://damien-toscano.vpnuser.lan:8000
// http://maxence-royer.vpnuser.lan:8000
export const baseURL = 'http://damien-toscano.vpnuser.lan:8000';
