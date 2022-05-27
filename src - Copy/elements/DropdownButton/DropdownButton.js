import { Dropdown } from "react-bootstrap";
import classes from "./DropdownButton.module.css";

const DropdownButton = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle size="sm" className={classes.dropdownBtn}>
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu className={classes.dropdownItems}>
        <Dropdown.Item id="cameras" onClick={props.update}>
          Cameras
        </Dropdown.Item>
        <Dropdown.Item id="film" onClick={props.update}>
          Film
        </Dropdown.Item>
        <Dropdown.Item id="accessories" onClick={props.update}>
          Accessories
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
