import classes from "./PayOnDelivery.module.css";
import { Package } from "phosphor-react";
import MainText from "../MainText/MainText";

const PayOnDelivery = (props) => {
  return (
    <div className={classes.padding}>
      <Package size={50}></Package>
      <MainText text="Instructions"></MainText>
      <div className={classes.text}>
        Pay on delivery makes life easy! Just confirm the order and pay when
        your order is delivered in 2-3 days.
      </div>
    </div>
  );
};

export default PayOnDelivery;
