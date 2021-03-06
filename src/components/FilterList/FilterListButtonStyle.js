import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./FilterList.module.css";
import DropdownButton from "../../elements/DropdownButton/DropdownButton";

const FilterList = (props) => {
  const buttonsCameras = props.buttonsCameras.map((button, i) => {
    return (
      <Container>
        <Button className={classes.btnFilter} size="sm">
          <span className="me-1" role="img" aria-label="flame">
            {button.emoji}
          </span>{" "}
          {button.text}
        </Button>
      </Container>
    );
  });

  const buttonsFilms = props.buttonsFilms.map((button, i) => {
    return (
      <Container>
        <Button className={classes.btnFilter} size="sm">
          <span className="me-1" role="img" aria-label="flame">
            {button.emoji}
          </span>{" "}
          {button.text}
        </Button>
      </Container>
    );
  });
  return (
    <div className={classes.padding}>
      <Container>
        <div className={classes.dropdownRow}>
          <DropdownButton></DropdownButton>
        </div>
        <div className={classes.buttonRow}>
          {props.display == "cameras" ? buttonsCameras : buttonsFilms}
        </div>
      </Container>
    </div>
  );
};

export default FilterList;
