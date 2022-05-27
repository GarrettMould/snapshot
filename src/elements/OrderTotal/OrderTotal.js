import classes from "./OrderTotal.module.css";
const OrderTotal = (props) => {
  return (
    <div className="d-flex justify-content-evenly mt-2 mb-2">
      <div className={classes.title}>Order Amount:</div>
      <div className={classes.amount}>{props.selectedProduct.price}</div>
    </div>
  );
};

export default OrderTotal;
