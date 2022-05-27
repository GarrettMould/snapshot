import classes from "./ProductPageDescription.module.css";

const ProductPageDescription = (props) => {
  return (
    <div className="d-flex justify-content-center pb-2">
      <div className={classes.description}>
        {props.selectedProduct && props.selectedProduct.description}
      </div>
    </div>
  );
};

export default ProductPageDescription;
