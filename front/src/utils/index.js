import slugify from 'slugify';

export const baseURL = 'http://ec2-3-80-166-219.compute-1.amazonaws.com/O-ld-the-door/back';

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
