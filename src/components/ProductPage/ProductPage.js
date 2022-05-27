import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import classes from "./ProductPage.module.css";
import Header from "../Header/Header";
import ProductPageImage from "../../elements/ProductPageImage/ProductPageImage";
import ProductPageInfo from "../../elements/ProductPageInfo/ProductPageInfo";
import ProductPageDescription from "../../elements/ProductPageDescription/ProductPageDescription";
import ButtonPurchase from "../../elements/ButtonPurchase/ButtonPurchase";
const ProductPage = (props) => {
  return (
    <div className={classes.padding}>
      <Container>
        <ProductPageImage
          selectedProduct={props.selectedProduct}
        ></ProductPageImage>
        <ProductPageInfo
          selectedProduct={props.selectedProduct}
        ></ProductPageInfo>
        <ProductPageDescription
          selectedProduct={props.selectedProduct}
        ></ProductPageDescription>
        <Link to="/formPageProduct">
          <ButtonPurchase text="Order Now"></ButtonPurchase>
        </Link>
      </Container>
    </div>
  );
};

export default ProductPage;
