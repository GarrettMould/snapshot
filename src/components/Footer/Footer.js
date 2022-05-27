import { useLocation } from "react-router-dom";
import mainlogo from "../../Images/mainlogo.png";
import FormTitle from "../../elements/FormTitle/FormTitle";
import SubText from "../../elements/SubText/SubText";
import classes from "./Footer.module.css";
import { MapPin } from "phosphor-react";
import { MessengerLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";

const Footer = (props) => {
  const location = useLocation();
  console.log(location);

  return (
    <div id="footer" className={classes.padding}>
      <div className="w-100 d-flex flex-column align-items-center">
        <img className={classes.mainlogo} src={mainlogo}></img>
        <div className={classes.footerText}>"+0824675798"</div>
        <div className={classes.footerText}>snapshothanoi@gmail.com</div>
        <div className={classes.iconRow}>
          <MapPin size={22}></MapPin>
          <MessengerLogo size={22}></MessengerLogo>
          <InstagramLogo size={22}></InstagramLogo>
        </div>
      </div>
    </div>
  );
};

export default Footer;
