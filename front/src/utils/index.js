import slugify from 'slugify';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const doSomething = () => {

};

export const slugifyTitle = (title) => (
  slugify(title, { lower: true })
);
