import { Home, Layers, Info, Mail, Cloud, FileText, Phone } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from '@/components/icons/BrandIcons';
import { SideNavItem } from './types';
import { Contactinfo } from './types';

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Home width={24} height={24} />,
  },

  {
    title: 'Projects',
    path: '/projects',
    icon: <Layers width={24} height={24} />,
    submenu: true,
    subMenuItems: [
      {
        title: 'All',
        path: '/projects',
      },
      { title: '01  Evolving', path: '/projects/portfolio_v2' },
      {
        title: '02  Gagini Slatkiši',
        path: '/projects/gaginislatkisi',
      },

      {
        title: '03  Foundations',
        path: '/projects/foundations',
      },
      { title: '04  E-Commerce', path: '/projects/e-commerce' },
    ],
  },
  {
    title: 'About',
    path: '/about',
    icon: <Info width={24} height={24} />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Mail width={24} height={24} />,
  },
  {
    title: 'AWS Associate Certificate',
    path: '/AWS Certified Developer - Associate certificate.pdf',
    icon: <Cloud width={24} height={24} />,
    new_window: true,
  },
  {
    title: 'Resume',
    path: '/Ivan_Ravić_Resume_30_9_2024.pdf',
    icon: <FileText width={24} height={24} />,
    new_window: true,
  },
];

export const CONTACT_INFO: Contactinfo[] = [
  {
    id: 1,
    href: 'mailto:ravic.ivan88@gmail.com',
    icon: <Mail size="1em" />,
    description: 'My Email',
    text: 'ravic.ivan88@gmail.com',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/ivan-ravić-b3aa36143',
    icon: <LinkedinIcon />,
    description: 'LinkedIn Profile',
    text: 'LinkedIn Profile',
  },
  {
    id: 3,
    href: 'https://github.com/IvanRavic88?tab=repositories',
    icon: <GithubIcon />,
    description: 'GitHub Profile',
    text: 'GitHub Profile',
  },
  {
    id: 4,
    href: 'tel:+381655254013',
    icon: <Phone size="1em" />,
    description: 'My Phone',
    text: '+381655254013',
  },
  {
    id: 5,
    href: 'https://www.instagram.com/ivan_ravic_88/',
    icon: <InstagramIcon />,
    description: 'My Instagram Profile',
    text: 'Instagram Profile',
  },
];
