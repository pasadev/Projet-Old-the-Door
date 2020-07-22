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
  // Content
  const contentTrim = content.trim();
  const contentLowerCase = contentTrim.toLowerCase();
  const contentSplit = contentLowerCase.split(' ');
  // .replace(,?/) etc ?

  // Word
  const wordTrim = word.trim();
  const wordLowerCase = wordTrim.toLowerCase();

  // Check
  const checked = contentSplit.includes(wordLowerCase);
  console.log(checked);
  console.log(contentSplit);
  console.log(wordLowerCase);
};

// http://damien-toscano.vpnuser.lan:8000
// http://maxence-royer.vpnuser.lan:8000
export const baseURL = 'http://damien-toscano.vpnuser.lan:8000';
