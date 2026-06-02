import { ProjectsPageData } from '@/types';

export const projectsPageData: ProjectsPageData = [
  {
    id: 1,
    title: 'Evolving',
    services: 'Development & DevOps',
    year: 2024,
    location: 'Serbia',
    descriptionTitle: 'Portfolio v2',
    projectDescription:
      'Built with Next.js, TypeScript, Tailwind CSS and Framer Motion, this portfolio is now hosted on Vercel. It was originally deployed on AWS as containerized infrastructure-as-code — Docker, Terraform for IaC, and Ansible for configuration management. I migrated it to Vercel to simplify hosting and lower maintenance cost, while keeping the same codebase and DevOps practices behind it.',
    imageSrcLight: '/images/portfolio_v02_light.png',
    imageSrcDark: '/images/portfolio_v02_dark.png',
    githubLink: 'https://github.com/IvanRavic88/portfolio_nextjs_docker',
    liveWebsite: 'https://ivanravic.com',
    status: 'live',
    host: 'Vercel',
    mobileImages: [
      {
        src: '/images/mobile_portfolio_v02_dark.png',
        alt: 'Dark mobile version of main page',
      },
      {
        src: '/images/mobile_portfolio_v02.png',
        alt: 'Light mobile version of main page',
      },
      { src: '/images/mobile_menu_portfolio_v02.png', alt: 'Mobile menu' },
    ],

    nextProject: { name: 'Gagini Slatkiši', href: '/projects/gaginislatkisi' },
  },
  {
    id: 2,
    title: 'Gagini Slatkiši',
    services: 'Development & DevOps',
    year: 2023,
    location: 'Serbia',
    descriptionTitle: 'gaginislatkisi.com',
    projectDescription:
      'A live client site for a homemade-cakes-and-sweets business, designed in Figma. It was first built as a Flask app (Jinja, SQLAlchemy, Pillow, WTForms, Flask-Login) and deployed on an AWS EC2 Ubuntu server behind Nginx and Docker. I have since rebuilt it in Next.js and TypeScript and moved it to Vercel for faster, lower-maintenance hosting. The linked GitHub repository is the original Flask version.',
    imageSrcLight: '/images/gagini_slatkisi_v2.webp',
    imageSrcDark: '/images/gagini_slatkisi_v2.webp',
    githubLink: 'https://github.com/IvanRavic88/GaginiSlatkisi',
    liveWebsite: 'https://gaginislatkisi.com',
    status: 'live',
    host: 'Vercel',
    mobileImages: [
      {
        src: '/images/mobile_gagini_slatkisi.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_gagini_slatkisi_2.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_gagini_slatkisi_menu.png',
        alt: 'Mobile menu',
      },
    ],
    nextProject: { name: 'Foundations', href: '/projects/foundations' },
  },
  {
    id: 3,
    title: 'Foundations',
    services: 'Development & DevOps',
    year: 2023,
    location: 'Serbia',
    descriptionTitle: 'Foundations',
    projectDescription:
      'My first portfolio and first venture into serverless on AWS: a static HTML/JavaScript frontend on Amazon S3 with CloudFront, backed by AWS Lambda and API Gateway, with Terraform managing the infrastructure as code. The live site is currently offline — I took the AWS infrastructure down to reduce running costs — but it may return. The source remains on GitHub.',
    imageSrcLight: '/images/hero-img.webp',
    imageSrcDark: '/images/hero-img.webp',
    githubLink:
      'https://github.com/IvanRavic88/Portfolio_1/tree/Lambda_SES_S3_API_integration',
    liveWebsite: '',
    status: 'offline',
    host: '',
    mobileImages: [
      {
        src: '/images/mobile_portfolio_v1.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_portfolio_v1_2.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_portfolio_v1_menu.png',
        alt: 'Mobile menu',
      },
    ],
    nextProject: { name: 'E-commerce', href: '/projects/e-commerce' },
  },

  {
    id: 4,
    title: 'E-Commerce',
    services: 'Development & DevOps',
    year: 2022,
    location: 'Serbia',
    descriptionTitle: 'E-Commerce',
    projectDescription:
      'This project focused on developing a modern and adaptable e-commerce website, with a full-stack approach. Product data management was streamlined using Sanity, while the design was crafted with Figma, CSS, and Material UI. The website was powered by Next.js, and Stripe was integrated to handle payment processing in test mode. The site was deployed efficiently using Vercel, ensuring a seamless and responsive user experience.',
    imageSrcLight: '/images/e-commerce_parallax.webp',
    imageSrcDark: '/images/e-commerce_parallax.webp',
    githubLink: 'https://github.com/IvanRavic88/E-commerce-StripeAndSanity',
    liveWebsite:
      'https://e-commerce-stripe-and-sanity-git-main-ivanravic88.vercel.app/',
    status: 'live',
    host: 'Vercel',
    mobileImages: [
      {
        src: '/images/mobile_e-commerce.PNG',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_e-commerce_2.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_e-commerce_shoping_page.png',
        alt: 'Mobile shopping page',
      },
    ],
    nextProject: { name: 'Evolving', href: '/projects/portfolio_v2' },
  },
];
