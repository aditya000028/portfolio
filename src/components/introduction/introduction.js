import classes from "./introduction.module.css";
import { HOME_SECTION_INTRODUCTION } from "../../strings";

function Introduction() {
  return (
    <div className={classes.introduction}>
      <div className={classes.content}>
        <div className={classes.introductionText}>
          <h1>{HOME_SECTION_INTRODUCTION.GREETING}</h1>
          <p>{HOME_SECTION_INTRODUCTION.ABOUT_ME}</p>
          <p>{HOME_SECTION_INTRODUCTION.CURRENTLY}</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
