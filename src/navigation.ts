import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'Login / Register',
          href: 'https://auth.medr.in',
        },
        {
          text: 'About Me',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        { text: 'Archives', href: getPermalink('/archives') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy policy', href: getPermalink('/privacy') },
      ],
    },
    {
      text: 'Authors',
      links: [
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  actions: [
    { text: 'Search', href: 'https://healthblog.in/search' },
  ],
};
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
   
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
       
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
    
      ],
    },
    {
      title: 'Company',
      links: [
       
        { text: 'Blog', href: '#' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/healthblog.in' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://instagram.com/healthblog.in' },
  ],
  footNote: `
     <a class="text-blue-600 underline dark:text-muted" href="https://healthblog.in"> HealthBlog.in</a> · All rights reserved.
  `,
};
