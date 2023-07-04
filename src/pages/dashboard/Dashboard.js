import classes from "./dashboard.module.css";
import Introduction from "../../components/introduction/introduction";
import Education from "../../components/education/education";
import DashboardGreeting from "../../components/dashboard-greeting/dashboardGreeting";

function DashboardPage() {
  return (
    <div className={classes.dashboard}>
      <DashboardGreeting />
      <Introduction />
      <Education />
    </div>
  );
}

export default DashboardPage;
