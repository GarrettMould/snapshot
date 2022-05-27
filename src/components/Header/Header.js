import { useState } from "react";
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
import { Link } from "react-router-dom";
import mainlogo from "../../Images/mainlogo.png";
import classes from "./Header.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { List, MessengerLogo, X } from "phosphor-react";

const Header = (props) => {
  const [dropdownMenu, setdropdownMenu] = useState(false);

  return (
    <div className={classes.padding}>
      <Container>
        <Navbar className={classes.navbarHeader}>
          <a href="#">
            {dropdownMenu === true ? (
              <X size={25} onClick={(e) => setdropdownMenu(false)}></X>
            ) : (
              <List size={25} onClick={(e) => setdropdownMenu(true)} />
            )}
          </a>
          <Link to="/GarrettMould/cameraShopMobile">
            <div className="d-flex justify-content-between">
              <img className={classes.mainlogo} src={mainlogo}></img>
            </div>
          </Link>
          <div>
            <a href="#">
              <MessengerLogo size={25} />
            </a>
          </div>
        </Navbar>
        {dropdownMenu === true ? (
          <DropdownMenu update={props.update}></DropdownMenu>
        ) : null}
      </Container>
    </div>
  );
};

export default Header;
