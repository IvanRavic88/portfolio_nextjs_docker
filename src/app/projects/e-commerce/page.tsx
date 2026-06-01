import { notFound } from 'next/navigation';
import ProjectsTemplate from '@/components/common/ProjectsTemplate';
import { projectsPageData } from '@/components/common/ProjectsTemplate/projectsPageData';

const eCommerce = () => {
  const projectData = projectsPageData[3];
  if (!projectData) notFound();
  return <ProjectsTemplate {...projectData} />;
};

export default eCommerce;
