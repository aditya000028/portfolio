import classes from "./underConstruction.module.css";
import { MISC } from '../../strings';

function UnderConstruction() {
  return (
    <div className={classes.underConstruction}>
      <div className={classes.content}>
        <img src="/assets/images/loading.gif" alt="Loading" />
        <h1>{MISC.WORK_IN_PROGRESS}</h1>
      </div>
    </div>
  );
}

export default UnderConstruction;
