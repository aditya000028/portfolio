import classes from "./experience.module.css";
import Chip from "@mui/material/Chip";

function Experience(props) {
  return (
    <div className={classes.experience}>
      <div className={classes.content}>
        <div className={classes.experienceHeading}>
          <div className={classes.name}>
            <h1>{props.title}</h1>
          </div>
          <div className={classes.role}>
            <h1>{props.subtitle}</h1>
          </div>
        </div>
        <div className={classes.experienceContent}>
          <img src={props.image} alt={props.altText} />
          <div className={classes.experienceDescription}>
            {props.descriptions.map((description) => {
              return <p className={classes.experienceSummary}>{description}</p>;
            })}
            <div className={classes.skills}>
              {props.skills.map((skill) => (
                <Chip label={skill} variant="outlined" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
