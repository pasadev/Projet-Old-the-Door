/* eslint-disable import/prefer-default-export */

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const doSomething = () => {

};
import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const slugifyTitle = (title) => (
  slugify(title, { lower: true })
);

// export const getAdventureBySlug = (adventures, slug) => (
//   adventures.find((adventure) => slugifyTitle(adventure.title) === slug)
// );
