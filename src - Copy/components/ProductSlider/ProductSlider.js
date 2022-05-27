import { Container, Card } from "react-bootstrap";
import ProductCard from "../../elements/ProductCard/ProductCard";

import classes from "./ProductSlider.module.css";

const ProductSlider = (props) => {
  const cameraProducts = props.cameras.map((camera, i) => {
    return (
      <Card
        id={camera.id}
        className={classes.productCard}
        onClick={props.select}
      >
        <div className="d-flex justify-content-end">
          <Card.Title
            id={camera.id}
            className={classes.cardPrice}
            style={{ fontSize: "1rem" }}
          >
            {camera.price}
          </Card.Title>
        </div>
        <div className="d-flex justify-content-center">
          <Card.Img
            id={camera.id}
            className={classes.productImage}
            src={camera.image}
            alt="Card image"
          />
        </div>
        <div>
          <div className="d-flex justify-content-start">
            <Card.Title
              id={camera.id}
              className={classes.cardTitle}
              style={{ fontSize: "1rem" }}
            >
              {camera.title}
            </Card.Title>
          </div>
          <div className="d-flex justify-content-start">
            <Card.Subtitle
              id={camera.id}
              className={classes.cardSubtitle}
              style={{ fontSize: "0.75rem" }}
            >
              {camera.specs}
            </Card.Subtitle>
          </div>
        </div>
      </Card>
    );
  });

  const filmProducts = props.films.map((film, i) => {
    return (
      <Card id={film.id} className={classes.productCard} onClick={props.select}>
        <div className="d-flex justify-content-end">
          <Card.Title
            id={film.id}
            className={classes.cardPrice}
            style={{ fontSize: "1rem" }}
          >
            {film.price}
          </Card.Title>
        </div>
        <div className="d-flex justify-content-center">
          <Card.Img
            id={film.id}
            className={classes.productImage}
            src={film.image}
            alt="Card image"
          />
        </div>
        <div>
          <div className="d-flex justify-content-start">
            <Card.Title
              id={film.id}
              className={classes.cardTitle}
              style={{ fontSize: "1rem" }}
            >
              {film.title}
            </Card.Title>
          </div>
          <div className="d-flex justify-content-start">
            <Card.Subtitle
              id={film.id}
              className={classes.cardSubtitle}
              style={{ fontSize: "0.75rem" }}
            >
              {film.specs}
            </Card.Subtitle>
          </div>
        </div>
      </Card>
    );
  });

  return (
    <div className={classes.padding}>
      <Container>
        <div className={classes.slider}>
          {props.display == "cameras" ? cameraProducts : filmProducts}
        </div>
      </Container>
    </div>
  );
};

export default ProductSlider;
