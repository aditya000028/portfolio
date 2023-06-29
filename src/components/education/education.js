import classes from "./education.module.css";

import { SECTION_EDUCATION } from '../../strings';

function Education() {
  return (
    <div className={classes.education}>
      <div className={classes.content}>
        <img src="/assets/images/SFU-logo.png" alt="SFU" />
        <div className={classes.educationText}>
          <h1>{SECTION_EDUCATION.HEADER}</h1>
          <p>{SECTION_EDUCATION.DEGREE_TEXT}</p>
          <p>{SECTION_EDUCATION.COURSES_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
