import ProjectsTemplate from '@/components/common/ProjectsTemplate';
import { projectsPageData } from '@/components/common/ProjectsTemplate/projectsPageData';

const Evolving = () => {
  const projectsData = projectsPageData[0];

  return <ProjectsTemplate {...projectsData} />;
};

export default Evolving;
