import {
  Nav,
  Dropdown,
  Navbar,
  NavDropdown,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
} from "react-bootstrap";

import classes from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { List, MessengerLogo, InstagramLogo } from "phosphor-react";
import image from "../../Images/lens.png";
import list from "../../Images/list.png";
import messenger from "../../Images/messenger-logo.png";
import instagram from "../../Images/instagram-logo.png";

const Header = (props) => {
  return (
    <div className={classes.padding}>
      <Container>
        <Navbar className={classes.navbarHeader}>
          <List style={{ color: "#909090" }} size={25} />
          <div className={classes.siteTitle}>Hano Film</div>
          <div>
            <a href="#">
              <MessengerLogo style={{ color: "#909090" }} size={22.5} />
            </a>
            <a href="#">
              <InstagramLogo
                style={{ color: "#909090" }}
                size={22.5}
                className="ms-2"
              />
            </a>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
