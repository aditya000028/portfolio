import DownloadButton from "../download-button/downloadButton";
import classes from "./education.module.css";

import { SECTION_EDUCATION, MISC } from "../../strings";

function Education() {
  return (
    <div className={classes.education}>
      <div className={classes.content}>
        <div className={classes.educationText}>
          <h1>{SECTION_EDUCATION.HEADER}</h1>
          <p>{SECTION_EDUCATION.DEGREE_TEXT}</p>
          <p>{SECTION_EDUCATION.COURSES_TEXT}</p>
        </div>
        <DownloadButton
          buttonText={MISC.DOWNLOAD_TRANSCRIPT}
          fileToDownload={MISC.TRANSCRIPT_NAME}
          newFileName={MISC.NEW_TRANSCRIPT_NAME}
        />
      </div>
    </div>
  );
}

export default Education;
