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

// http://damien-toscano.vpnuser.lan:8000
// http://maxence-royer.vpnuser.lan:8000
export const baseURL = 'http://damien-toscano.vpnuser.lan:8000';
