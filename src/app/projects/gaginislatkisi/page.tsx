import ProjectsTemplate from '@/components/common/ProjectsTemplate';
import { projectsPageData } from '@/components/common/ProjectsTemplate/projectsPageData';

const gaginiSlatkisi = () => {
  const projectData = projectsPageData[1];
  return <ProjectsTemplate {...projectData} />;
};

export default gaginiSlatkisi;
