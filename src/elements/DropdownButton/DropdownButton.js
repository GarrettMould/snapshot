import { Dropdown } from "react-bootstrap";
import classes from "./DropdownButton.module.css";

const DropdownButton = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle size="sm" className={classes.dropdownBtn}>
        {props.display}
      </Dropdown.Toggle>

      <Dropdown.Menu className={classes.dropdownItems}>
        <Dropdown.Item
          className={classes.listItem}
          id="Cameras"
          onClick={props.update}
        >
          Cameras
        </Dropdown.Item>
        <Dropdown.Item
          className={classes.listItem}
          id="Film"
          onClick={props.update}
        >
          Film
        </Dropdown.Item>
        <Dropdown.Item
          className={classes.listItem}
          id="Accessories"
          onClick={props.update}
        >
          Accessories
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
