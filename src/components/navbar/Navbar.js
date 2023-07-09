import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.mainNav}>
      <ul className={classes.navItems}>
        <li>
          <Link to="/">
            <div className={classes.linkText}>Home</div>
          </Link>
        </li>
        <li>
          <Link to="/work-experience">
          <div className={classes.linkText}>Work Experience</div>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <div className={classes.linkText}>Projects</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
