import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
      <nav className={classes.nav}>
        <ul className={classes.items}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work-experience">Work Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/miscellaneous">Miscellaneous</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
