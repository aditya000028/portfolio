import PageGreeting from "../../components/page-greeting/pageGreeting";
import {
  WORK_EXPERIENCE_GREETING,
  WORK_EXPERIENCE_SECTION_VISIER,
  WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA,
} from "../../strings";
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
        descriptions={WORK_EXPERIENCE_SECTION_VISIER.DESCRIPTIONS}
        skills={WORK_EXPERIENCE_SECTION_VISIER.SKILLS}
        companyLogo={WORK_EXPERIENCE_SECTION_VISIER.IMAGE_PATH}
        alt={WORK_EXPERIENCE_SECTION_VISIER.IMAGE_ALT}
      />
      <Experience
        companyName={WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA.NAME}
        role={WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA.ROLE}
        descriptions={WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA.DESCRIPTIONS}
        skills={WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA.SKILLS}
        companyLogo={WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA.IMAGE_PATH}
        alt={WORK_EXPERIENCE_SECTION_PNI_DIGITAL_MEDIA.IMAGE_ALT}
      />
    </div>
  );
}

export default WorkExperiencePage;
