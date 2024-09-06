import { ProjectsPageData } from '@/types';

export const projectsPageData: ProjectsPageData = [
  {
    id: 1,
    title: 'Evolving',
    services: 'Development & DevOps',
    year: 2024,
    location: 'Serbia',
    descriptionTitle: 'Portfolio v02',
    projectDescription:
      'This portfolio reflects my professional experience in modern web development, utilizing a comprehensive tech stack that includes Docker for containerization, Next.js for efficient server-side rendering, Tailwind CSS for responsive design, and TypeScript for type safety. Hosted on AWS for reliability and scalability, it also features dynamic animations created with Framer Motion. The development process is supported by professional practices, including Git workflows for version control, Terraform for infrastructure as code, and Ansible for automated configuration management, ensuring smooth and efficient deployment.',
    imageSrcLight: '/images/portfolio_v02_light.png',
    imageSrcDark: '/images/portfolio_v02_dark.png',
    nextProject: { name: 'Gagini Slatkisi ', href: '/projects/gaginislatkisi' },
  },
];
