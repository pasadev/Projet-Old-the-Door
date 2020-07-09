import slugify from 'slugify';

export const slugifyTitle = (title) => (
  slugify(title, { lower: true })
);

export const getAdventureBySlug = (adventures, slug) => (
  adventures.find((adventure) => slugifyTitle(adventure.title) === slug)
);
