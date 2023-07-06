import UnderConstruction from "../../components/under-construction/underConstruction";
import PageGreeting from '../../components/page-greeting/pageGreeting';
import { WORK_EXPERIENCE_GREETING } from '../../strings';

function WorkExperiencePage() {

  const WORK_EXPERIENCE_TEXT = [
    WORK_EXPERIENCE_GREETING.WORK,
    WORK_EXPERIENCE_GREETING.EXPERIENCE
  ];

  return (
    <div>
      <PageGreeting mainText={WORK_EXPERIENCE_TEXT} description={WORK_EXPERIENCE_GREETING.DESCRIPTION} />
      <UnderConstruction />
    </div>
  );
}

export default WorkExperiencePage;
