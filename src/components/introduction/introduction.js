import classes from "./introduction.module.css";
import { SECTION_INTRODUCTION } from "../../strings";

function Introduction() {
  return (
    <div className={classes.introduction}>
      <div className={classes.content}>
        <div className={classes.introductionText}>
          <h1>{SECTION_INTRODUCTION.GREETING}</h1>
          <p>{SECTION_INTRODUCTION.ABOUT_ME}</p>
          <p>{SECTION_INTRODUCTION.CURRENTLY}</p>
        </div>
        <img src="/assets/images/ProfilePicture.jpeg" alt="Profile headshot" />
      </div>
    </div>
  );
}

export default Introduction;
