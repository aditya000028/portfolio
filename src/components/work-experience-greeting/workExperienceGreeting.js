import classes from "./workExperienceGreeting.module.css";

function WorkExperienceGreeting() {
  return (
    <div className={classes.workExperienceGreeting}>
      <div className={classes.content}>
        <div className={classes.workExperienceText}>
          <h1>Work</h1>
          <h1>Experience</h1>
        </div>
        <div className={classes.workExperienceDescription}>
          <p>Some random text</p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceGreeting;
