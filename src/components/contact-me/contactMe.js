import classes from "./contactMe.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { CONTACT_ME } from "../../strings";

function ContactMe() {
  return (
    <div className={classes.contactMe}>
      <ul>
        <li>
          <a href={CONTACT_ME.LINKEDIN_LINK} target="_blank">
            <AiFillLinkedin className={classes.icon} />
            <p>{CONTACT_ME.LINKEDIN}</p>
          </a>
        </li>
        <li>
          <a href={CONTACT_ME.GITHUB_LINK} target="_blank">
            <AiFillGithub className={classes.icon} />
            <p>{CONTACT_ME.GITHUB}</p>
          </a>
        </li>
        <li>
          <MdEmail className={classes.icon} />
          <p>{CONTACT_ME.EMAIL}</p>
        </li>
        <li>
          <AiFillPhone className={classes.icon} />
          <p>{CONTACT_ME.PHONE}</p>
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
