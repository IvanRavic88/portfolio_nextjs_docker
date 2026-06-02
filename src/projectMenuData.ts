import { Project } from './types';

export const projects: Project[] = [
  {
    index: 1,
    title: '01  Evolving',
    src: '/images/Ivan.webp',
    href: '/projects/portfolio_v2',
    description: 'Next.js + TypeScript - now on Vercel (originally AWS IaC)',
    color: '#111414',
  },
  {
    index: 2,
    title: '02  Gagini Slatkiši',
    src: '/images/gagini_slatkisi_v1.png',
    href: '/projects/gaginislatkisi',
    description: 'Live client site - rebuilt in Next.js + TS on Vercel',
    color: '#bb2649',
  },
  {
    index: 3,
    title: '03  Foundations',
    src: '/images/portfolio_v01_1.png',
    href: '/projects/foundations',
    description: 'Serverless on AWS (Lambda, S3, CloudFront) - currently offline',
    color: '#ffd6a5',
  },
  {
    index: 4,
    title: '04  E-Commerce',
    src: '/images/e-commerce_1.png',
    href: '/projects/e-commerce',
    description: 'Next.js storefront - Stripe checkout, Sanity CMS, on Vercel',
    color: '#EFE8D3',
  },
];
