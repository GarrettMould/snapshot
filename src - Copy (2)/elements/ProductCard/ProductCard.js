import { Container, Card } from "react-bootstrap";

import classes from "./ProductCard.module.css";
import canonAutoboyLunaXL from "../../Images/canon_autoboy_luna_xl.png";
import filmCameras from "../../Images/film_cameras.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = (props) => {
  return (
    <Card className={classes.productCard}>
      <div className="d-flex justify-content-end">
        <Card.Title className={classes.cardPrice} style={{ fontSize: "1rem" }}>
          {props.selectedProduct.price}
        </Card.Title>
      </div>
      <div className="d-flex justify-content-center">
        <Card.Img
          className={classes.productImage}
          src={props.selectedProduct.image}
          alt="Card image"
        />
      </div>
      <div className="d-flex justify-content-start">
        <Card.Title className={classes.cardTitle} style={{ fontSize: "1rem" }}>
          {props.selectedProduct.title}
        </Card.Title>
      </div>
      <div className="d-flex justify-content-start">
        <Card.Subtitle
          className={classes.cardSubtitle}
          style={{ fontSize: "0.75rem" }}
        >
          {props.selectedProduct.specs}
        </Card.Subtitle>
      </div>
    </Card>
  );
};

export default ProductCard;
