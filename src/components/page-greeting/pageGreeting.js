import classes from "./pageGreeting.module.css";

function PageGreeting(props) {
  return (
    <div className={classes.pageGreeting}>
      <div className={classes.content}>
        <div className={classes.mainText}>
          {props.mainText.map((value) => <h1>{value}</h1>)}
        </div>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PageGreeting;
