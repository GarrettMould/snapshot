import { Container } from "react-bootstrap";
import FormTitle from "../../elements/FormTitle/FormTitle";
import ProductCard from "../../elements/ProductCard/ProductCard";
import FillFormProduct from "../../elements/FillFormProduct/FillFormProduct";
import classes from "./FormPageProduct.module.css";
const FormPageProduct = (props) => {
  return (
    <div className={classes.padding}>
      <Container className="d-flex flex-column">
        <ProductCard selectedProduct={props.selectedProduct}></ProductCard>
        <FillFormProduct
          onDropDownChange={props.onDropDownChange}
        ></FillFormProduct>
      </Container>
    </div>
  );
};

export default FormPageProduct;
