import slugify from 'slugify';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const slugifyTitle = (title) => (
  slugify(title.replace('\'', '-'), { lower: true })
);
