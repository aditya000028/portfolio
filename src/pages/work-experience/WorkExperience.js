import UnderConstruction from "../../components/under-construction/underConstruction";
import PageGreeting from "../../components/page-greeting/pageGreeting";
import { WORK_EXPERIENCE_GREETING, WORK_EXPERIENCE_SECTION_VISIER } from "../../strings";
import Experience from "../../components/experience/experience";

function WorkExperiencePage() {
  const WORK_EXPERIENCE_TEXT = [
    WORK_EXPERIENCE_GREETING.WORK,
    WORK_EXPERIENCE_GREETING.EXPERIENCE,
  ];

  return (
    <div>
      <PageGreeting
        mainText={WORK_EXPERIENCE_TEXT}
        description={WORK_EXPERIENCE_GREETING.DESCRIPTION}
      />
      <Experience
        companyName={WORK_EXPERIENCE_SECTION_VISIER.NAME}
        role={WORK_EXPERIENCE_SECTION_VISIER.ROLE}
        description={WORK_EXPERIENCE_SECTION_VISIER.DESCRIPTION}
        skills={WORK_EXPERIENCE_SECTION_VISIER.SKILLS}
        companyLogo={WORK_EXPERIENCE_SECTION_VISIER.IMAGE_PATH}
        alt={WORK_EXPERIENCE_SECTION_VISIER.IMAGE_ALT}
      />
      <UnderConstruction />
    </div>
  );
}

export default WorkExperiencePage;
