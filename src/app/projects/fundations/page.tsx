import ProjectsTemplate from '@/components/common/ProjectsTemplate';
import { projectsPageData } from '@/components/common/ProjectsTemplate/projectsPageData';

const fundations = () => {
  const projectData = projectsPageData[2];
  return <ProjectsTemplate {...projectData} />;
};

export default fundations;
