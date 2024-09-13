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
      'This portfolio reflects my professional experience in modern web development, utilizing a comprehensive tech stack that includes Docker for containerization, Next.js for efficient server-side rendering, Tailwind CSS for responsive design, and TypeScript for type safety. Hosted on AWS for reliability and scalability, it also features dynamic animations created with Framer Motion. The development process is supported by professional practices, including Git workflows for version control, Terraform for infrastructure as code, and Ansible for automated configuration management, ensuring smooth and efficient deployment.',
    imageSrcLight: '/images/portfolio_v02_light.png',
    imageSrcDark: '/images/portfolio_v02_dark.png',
    githubLink: 'https://github.com/IvanRavic88/portfolio_nextjs_docker',
    liveWebsite: 'https://ivanravic.com',
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

    nextProject: { name: 'Gagini Slatkisi ', href: '/projects/gaginislatkisi' },
  },
  {
    id: 2,
    title: 'Gagini Slatkiši',
    services: 'Development & DevOps',
    year: 2023,
    location: 'Serbia',
    descriptionTitle: 'gaginislatkisi.com',
    projectDescription:
      'The GaginiSlatkiši website offers a modern and user-friendly platform to showcase a variety of homemade cakes and sweets. The GaginiSlatkiši website is designed using Figma for UI/UX, developed with HTML, CSS, and minimal JavaScript for the frontend, Flask (Jinja, SQLAlchemy, Pillow, WTForm, flask_login) for backend functionality, and deployed via Amazon EC2 on an Ubuntu server using Nginx and Docker for efficient containerization and scalability.',
    imageSrcLight: '/images/gagini_slatkisi_v2.png',
    imageSrcDark: '/images/gagini_slatkisi_v2.png',
    githubLink: 'https://github.com/IvanRavic88/GaginiSlatkisi',
    liveWebsite: 'https://gaginislatkisi.com',
    mobileImages: [
      {
        src: '/images/mobile_gagini_slatkisi.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_gagini_slatkisi_.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_gagini_slatkisi_menu.png',
        alt: 'Mobile menu',
      },
    ],
    nextProject: { name: 'Fundations', href: '/projects/fundations' },
  },
  {
    id: 3,
    title: 'Fundations',
    services: 'Development & DevOps',
    year: 2023,
    location: 'Serbia',
    descriptionTitle: 'Fundations',
    projectDescription:
      'This portfolio website represents my initial foray into serverless architecture on AWS. Originally developed with Flask, it has been transitioned to a serverless framework to enhance performance and scalability. The frontend, built with HTML and JavaScript, is hosted on Amazon S3 with CloudFront for efficient global delivery. AWS Lambda, integrated with API Gateway, handles backend services, while Terraform manages the infrastructure as code. This project showcases my proficiency in implementing modern cloud solutions and delivering scalable, high-performance web applications.',
    imageSrcLight: '/images/hero-img.png',
    imageSrcDark: '/images/hero-img.png',
    githubLink:
      'https://github.com/IvanRavic88/Portfolio_1/tree/Lambda_SES_S3_API_integration',
    liveWebsite: 'https://old.ivanravic.com',
    mobileImages: [
      {
        src: '/images/mobile_portfolio_v1.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_portfolio_v1_.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_portfolio_v1_menu.png',
        alt: 'Mobile menu',
      },
    ],
    nextProject: { name: 'E-commerce', href: '/projects/e-commerce' },
  },
  // TODO: Make picture for e-commerce project and update the data below
  {
    id: 4,
    title: 'E-Commerce',
    services: 'Development & DevOps',
    year: 2022,
    location: 'Serbia',
    descriptionTitle: 'E-Commerce',
    projectDescription:
      'The project involved creating a modern, adaptable e-commerce site with full-stack development. Sanity managed product data, while Figma, CSS, and Material UI shaped the design. Next.js powered the backend, React.js the frontend, and Stripe handled payments in test mode, all deployed on Vercel.',
    imageSrcLight: '/images/e-commerce_parallax.png',
    imageSrcDark: '/images/e-commerce_parallax.png',
    githubLink: 'https://github.com/IvanRavic88/E-commerce-StripeAndSanity',
    liveWebsite:
      'https://e-commerce-stripe-and-sanity-git-main-ivanravic88.vercel.app/',
    mobileImages: [
      {
        src: '/images/mobile_e-commerce.png',
        alt: 'Mobile version of main page',
      },
      {
        src: '/images/mobile_e-commerce_.png',
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
