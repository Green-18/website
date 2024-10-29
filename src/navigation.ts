import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Über uns',
      href: getPermalink('/about'),
    },
    {
      text: 'Speisekarte',
      href: getPermalink('/menu'),
    },
  ],
  actions: [{ text: 'Reservieren', href: getPermalink('/#reservation'), icon: 'tabler:tools-kitchen-2' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/imprint') },
    // { text: 'Datenschutz', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/green18.restaurant/',
      text: 'Instagram',
    },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `<a class="dark:text-muted" href="https://github.com/onwidget/astrowind" target="_blank">Astrowind</a> tweaked with 🖤 by <a class="dark:text-muted" href="https://github.com/defaude" target="_blank">defaude</a>`,
};
