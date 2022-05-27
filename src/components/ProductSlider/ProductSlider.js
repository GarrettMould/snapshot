import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RadioButton } from "phosphor-react";
import ProductCard from "../../elements/ProductCard/ProductCard";

import classes from "./ProductSlider.module.css";

const ProductSlider = (props) => {
  const cameraProducts = props.cameras.map((camera, i) => {
    return (
      <Link to="/productPage">
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
              src={camera && camera.image}
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
      </Link>
    );
  });

  const filmProducts = props.films.map((film, i) => {
    return (
      <Link to="/productPage">
        <Card
          id={film.id}
          className={classes.productCard}
          onClick={props.select}
        >
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
              src={film && film.image}
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
      </Link>
    );
  });

  const accessoryProducts = props.accessories.map((accessory, i) => {
    return (
      <Link to="/productPage">
        <Card
          id={accessory.id}
          className={classes.productCard}
          onClick={props.select}
        >
          <div className="d-flex justify-content-end">
            <Card.Title
              id={accessory.id}
              className={classes.cardPrice}
              style={{ fontSize: "1rem" }}
            >
              {accessory.price}
            </Card.Title>
          </div>
          <div className="d-flex justify-content-center">
            <Card.Img
              id={accessory.id}
              className={classes.productImage}
              src={accessory && accessory.image}
              alt="Card image"
            />
          </div>
          <div>
            <div className="d-flex justify-content-start">
              <Card.Title
                id={accessory.id}
                className={classes.cardTitle}
                style={{ fontSize: "1rem" }}
              >
                {accessory.title}
              </Card.Title>
            </div>
            <div className="d-flex justify-content-start">
              <Card.Subtitle
                id={accessory.id}
                className={classes.cardSubtitle}
                style={{ fontSize: "0.75rem" }}
              >
                {accessory.specs}
              </Card.Subtitle>
            </div>
          </div>
        </Card>
      </Link>
    );
  });

  var productDisplay;
  if (props.display == "Cameras") {
    productDisplay = cameraProducts;
  } else if (props.display == "Film") {
    productDisplay = filmProducts;
  } else if (props.display == "Accessories") {
    productDisplay = accessoryProducts;
  }

  return (
    <div id="productPage" className={classes.padding}>
      <Container>
        <div className={classes.slider}>{productDisplay}</div>
      </Container>
    </div>
  );
};

export default ProductSlider;
