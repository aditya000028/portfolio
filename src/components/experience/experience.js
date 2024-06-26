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
          <div className={classes.dateRange}>
            <span className={classes.date}>{props.dateRange}</span>
          </div>
        </div>
        <div className={classes.experienceContent}>
          {props.image == null || props.image.length === 0 ? null : (
            <img src={props.image} alt={props.altText} />
          )}
          <div className={classes.experienceDescription}>
            {props.descriptions.map((description, index) => {
              return <p key={index} className={classes.experienceSummary}>{description}</p>;
            })}
            <div className={classes.skills}>
              {props.skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
