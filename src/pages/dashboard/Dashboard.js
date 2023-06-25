import classes from "./dashboard.module.css";
import Introduction from "../../components/introduction/introduction";
import Education from "../../components/education/education";
import Interests from "../../components/interests/interests";

function DashboardPage() {
  return (
    <div className={classes.dashboard}>
      <div className={classes.greeting}>
        <h1>Hi there</h1>
      </div>
      <Introduction />
      <Education />
      <Interests />
    </div>
  );
}

export default DashboardPage;
