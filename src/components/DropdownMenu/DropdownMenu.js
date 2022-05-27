import { useState } from "react";
import classes from "./DropdownMenu.module.css";
import { Link } from "react-router-dom";
const DropdownMenu = (props) => {
    
  return (
    <div className={classes.padding}>
      <ul>
        <a href="#productPage" id="Cameras" onClick={props.update}>
          <li className={classes.item}>
            <span>Cameras</span>
          </li>
        </a>
        <a href="#productPage" id="Film" onClick={props.update}>
          <li className={classes.item}>
            <span>Film</span>
          </li>
        </a>
        <a href="#productPage" id="Accessories" onClick={props.update}>
          <li className={classes.item}>
            <span>Accessories</span>
          </li>
        </a>
        <a href="#footer">
          <li className={classes.item}>
            <span>Contact</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default DropdownMenu;
