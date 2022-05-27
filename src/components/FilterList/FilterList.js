import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./FilterList.module.css";
import DropdownButton from "../../elements/DropdownButton/DropdownButton";

const FilterList = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  const buttonsCameras = props.buttonsCameras.map((button, i) => {
    return (
      <div>
        <Container>
          <Button className={classes.btnFilter}>{button.text}</Button>
        </Container>
      </div>
    );
  });

  const buttonsFilms = props.buttonsFilms.map((button, i) => {
    return (
      <div>
        <Container>
          <Button className={classes.btnFilter}>{button.text}</Button>
        </Container>
      </div>
    );
  });
  return (
    <div className={classes.padding}>
      <Container>
        <div className={classes.dropdownRow}>
          <DropdownButton
            display={props.display}
            update={props.update}
          ></DropdownButton>
        </div>
        <div className={classes.extraPadding}>
          <Carousel
            responsive={responsive}
            keyBoardControl={false}
            arrows={false}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            infinite={false}
          >
            {props.display == "Cameras" ? buttonsCameras : buttonsFilms}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default FilterList;
