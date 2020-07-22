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

export const doSomething = () => {

};

// http://damien-toscano.vpnuser.lan:8000
// http://maxence-royer.vpnuser.lan:8000
export const baseURL = 'http://damien-toscano.vpnuser.lan:8000';
