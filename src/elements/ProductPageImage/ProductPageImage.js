import classes from "./ProductPageImage.module.css";
import canonAutoboy from "../../Images/canon_autoboy_luna_xl.png";
import { Container } from "react-bootstrap";

const ProductPageImage = (props) => {
  return (
    <div className="d-flex justify-content-center p-5">
      <img
        className={classes.img}
        src={props.selectedProduct && props.selectedProduct.image}
      ></img>
    </div>
  );
};
export default ProductPageImage;
