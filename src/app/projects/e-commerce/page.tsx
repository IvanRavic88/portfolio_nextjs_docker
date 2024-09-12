import ProjectsTemplate from '@/components/common/ProjectsTemplate';
import { projectsPageData } from '@/components/common/ProjectsTemplate/projectsPageData';

const eCommerce = () => {
  const projectData = projectsPageData[3];
  return <ProjectsTemplate {...projectData} />;
};

export default eCommerce;
