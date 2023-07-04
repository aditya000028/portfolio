import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.mainNav}>
      <ul className={classes.navItems}>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/work-experience">
            <button>Work Experience</button>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/miscellaneous">
            <button>Miscellaneous</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
