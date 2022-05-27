import classes from "./ProductPageInfo.module.css";

const ProductPageInfo = (props) => {
  return (
    <div className="pb-3">
      <div>
        <div className={classes.title}>
          {props.selectedProduct && props.selectedProduct.title}
        </div>
        <div className={classes.specs}>
          {props.selectedProduct && props.selectedProduct.specs}
        </div>
        <div className={classes.price}>
          {props.selectedProduct && props.selectedProduct.price}
        </div>
      </div>
    </div>
  );
};
export default ProductPageInfo;
