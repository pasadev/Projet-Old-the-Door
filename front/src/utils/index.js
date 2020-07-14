import slugify from 'slugify';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

<<<<<<< HEAD
<<<<<<< HEAD
export const doSomething = () => {

};

=======
>>>>>>> 6650c0bad401ced2a7c8bd4116ca59a07cccad42
=======
>>>>>>> c88a32b4a52471fcf23572d426a79b2cc3a7f935
export const slugifyTitle = (title) => (
  slugify(title.replace('\'', '-'), { lower: true })
);
