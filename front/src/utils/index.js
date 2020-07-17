import slugify from 'slugify';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// I guess I gotta put my function in here?

export const checkAnswer = (keyGuess, lockGuess, keyAnswer, lockAnswer) => {
  if (keyGuess.trim().toLowerCase() === keyAnswer.trim().toLowerCase()
  && lockGuess.trim().toLowerCase() === lockAnswer.trim().toLowerCase()) {
    return true;
  }
  return false;
};

export const doSomething = () => {

};

// eslint-disable-next-line import/prefer-default-export
export const slugifyTitle = (title) => (
  slugify(title.replace('\'', '-'), { lower: true })
);

// http://damien-toscano.vpnuser.lan:8000
// http://maxence-royer.vpnuser.lan:8000
export const baseURL = 'http://maxence-royer.vpnuser.lan:8000';
