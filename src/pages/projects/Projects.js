import PageGreeting from "../../components/page-greeting/pageGreeting";
import {
  PROJECTS_GREETING,
  PROJECTS_SECTION_PORTFOLIO
} from "../../strings";
import Experience from "../../components/experience/experience";

function ProjectsPage() {
  const PROJECTS_TEXT = [
    PROJECTS_GREETING.PROJECTS
  ];

  return (
    <div>
      <PageGreeting
        mainText={PROJECTS_TEXT}
        description={PROJECTS_GREETING.DESCRIPTION}
      />
      <Experience
        title={PROJECTS_SECTION_PORTFOLIO.NAME}
        subtitle={PROJECTS_SECTION_PORTFOLIO.PROJECT_TYPE}
        descriptions={PROJECTS_SECTION_PORTFOLIO.DESCRIPTIONS}
        skills={PROJECTS_SECTION_PORTFOLIO.SKILLS}
        image={PROJECTS_SECTION_PORTFOLIO.IMAGE_PATH}
        altText={PROJECTS_SECTION_PORTFOLIO.IMAGE_ALT}
      />
    </div>
  );
}

export default ProjectsPage;
