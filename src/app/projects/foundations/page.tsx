import { notFound } from 'next/navigation';
import ProjectsTemplate from '@/components/common/ProjectsTemplate';
import { projectsPageData } from '@/components/common/ProjectsTemplate/projectsPageData';

const foundations = () => {
  const projectData = projectsPageData[2];
  if (!projectData) notFound();
  return <ProjectsTemplate {...projectData} />;
};

export default foundations;
