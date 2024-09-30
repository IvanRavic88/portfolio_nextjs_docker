import { Icon } from '@iconify/react';
import { SideNavItem } from './types';
import { Contactinfo } from './types';

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon="lucide:layers" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        title: 'All',
        path: '/projects',
      },
      { title: '01  Evolving', path: '/projects/portfolio_v2' },
      {
        title: '02  gaginislatkisi.com',
        path: '/projects/gaginislatkisi',
      },

      {
        title: '03  Fundations',
        path: '/projects/fundations',
      },
      { title: '04  E-Commerce', path: '/projects/e-commerce' },
    ],
  },
  {
    title: 'About',
    path: '/about',
    icon: <Icon icon="lucide:info" width="24" height="24" />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'AWS Associate Certificate',
    path: '/AWS Certified Developer - Associate certificate.pdf',
    icon: <Icon icon="lucide:cloud" width="24" height="24" />,
    new_window: true,
  },
  {
    title: 'Resume',
    path: '/Ivan_Ravić_Resume_30_9_2024.pdf',
    icon: <Icon icon="lucide:file-text" width="24" height="24" />,
    new_window: true,
  },
];

export const CONTACT_INFO: Contactinfo[] = [
  {
    id: 1,
    href: 'mailto:ravic.ivan88@gmail.com',
    icon: <Icon icon="mdi:email" />,
    description: 'My Email',
    text: 'ravic.ivan88@gmail.com',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/ivan-ravić-b3aa36143',
    icon: <Icon icon="akar-icons:linkedin-fill" />,
    description: 'LinkedIn Profile',
    text: 'LinkedIn Profile',
  },
  {
    id: 3,
    href: 'https://github.com/IvanRavic88?tab=repositories',
    icon: <Icon icon="akar-icons:github-fill" />,
    description: 'GitHub Profile',
    text: 'GitHub Profile',
  },
  {
    id: 4,
    href: 'tel:+381655254013',
    icon: <Icon icon="akar-icons:phone" />,
    description: 'My Phone',
    text: '+381655254013',
  },
  {
    id: 5,
    href: 'https://www.instagram.com/ivan_ravic_88/',
    icon: <Icon icon="akar-icons:instagram-fill" />,
    description: 'My Instagram Profile',
    text: 'Instagram Profile',
  },
];
