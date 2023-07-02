import classes from "./dashboard.module.css";
import Introduction from "../../components/introduction/introduction";
import Education from "../../components/education/education";
import Interests from "../../components/interests/interests";
import DashboardGreeting from "../../components/dashboard-greeting/dashboardGreeting";

function DashboardPage() {
  return (
    <div className={classes.dashboard}>
      <DashboardGreeting />
      <Introduction />
      <Education />
      <Interests />
    </div>
  );
}

export default DashboardPage;
