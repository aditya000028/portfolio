import PageGreeting from "../../components/page-greeting/pageGreeting";
import {
  PROJECTS_GREETING,
  PROJECTS_SECTION_PORTFOLIO,
  PROJECTS_SECTION_BAYTREE,
  PROJECTS_SECTION_LYRICAL,
  PROJECTS_SECTION_SABS,
  PROJECTS_SECTION_FITCHECK
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
      <Experience
        title={PROJECTS_SECTION_BAYTREE.NAME}
        subtitle={PROJECTS_SECTION_BAYTREE.PROJECT_TYPE}
        descriptions={PROJECTS_SECTION_BAYTREE.DESCRIPTIONS}
        skills={PROJECTS_SECTION_BAYTREE.SKILLS}
        image={PROJECTS_SECTION_BAYTREE.IMAGE_PATH}
        altText={PROJECTS_SECTION_BAYTREE.IMAGE_ALT}
      />
      <Experience
        title={PROJECTS_SECTION_LYRICAL.NAME}
        subtitle={PROJECTS_SECTION_LYRICAL.PROJECT_TYPE}
        descriptions={PROJECTS_SECTION_LYRICAL.DESCRIPTIONS}
        skills={PROJECTS_SECTION_LYRICAL.SKILLS}
        image={PROJECTS_SECTION_LYRICAL.IMAGE_PATH}
        altText={PROJECTS_SECTION_LYRICAL.IMAGE_ALT}
      />
      <Experience
        title={PROJECTS_SECTION_SABS.NAME}
        subtitle={PROJECTS_SECTION_SABS.PROJECT_TYPE}
        descriptions={PROJECTS_SECTION_SABS.DESCRIPTIONS}
        skills={PROJECTS_SECTION_SABS.SKILLS}
        image={PROJECTS_SECTION_SABS.IMAGE_PATH}
        altText={PROJECTS_SECTION_SABS.IMAGE_ALT}
      />
      <Experience
        title={PROJECTS_SECTION_FITCHECK.NAME}
        subtitle={PROJECTS_SECTION_FITCHECK.PROJECT_TYPE}
        descriptions={PROJECTS_SECTION_FITCHECK.DESCRIPTIONS}
        skills={PROJECTS_SECTION_FITCHECK.SKILLS}
        image={PROJECTS_SECTION_FITCHECK.IMAGE_PATH}
        altText={PROJECTS_SECTION_FITCHECK.IMAGE_ALT}
      />
    </div>
  );
}

export default ProjectsPage;
