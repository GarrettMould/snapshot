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
  return (
    <div className={classes.padding}>
      <Container>
        <Navbar className={classes.navbarHeader}>
          <Link to="/">
            <img className={classes.mainlogo} src={mainlogo}></img>
          </Link>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
