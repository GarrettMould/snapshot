import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import classes from "./ProductPage.module.css";
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
        <ButtonPurchase text="Order Now"></ButtonPurchase>
      </Container>
    </div>
  );
};

export default ProductPage;
