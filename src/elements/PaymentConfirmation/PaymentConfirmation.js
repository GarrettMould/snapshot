import { useState } from "react";
import {
  Form,
  Card,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import FormTitle from "../FormTitle/FormTitle";
import BankTransfer from "../BankTransfer/BankTransfer";
import PayOnDelivery from "../PayOnDelivery/PayOnDelivery";
import OrderTotal from "../OrderTotal/OrderTotal";
import ButtonPurchase from "../ButtonPurchase/ButtonPurchase";
import classes from "./PaymentConfirmation.module.css";

const PaymentConfirmation = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  return (
    <div className={classes.padding}>
      <Card className={classes.paymentCard}>
        <FormTitle title="Payment Details"></FormTitle>
        <div className={classes.paymentRow}>
          <ToggleButtonGroup
            name="payment"
            type="radio"
            className="w-100"
            defaultValue={paymentMethod}
          >
            <Button
              id={"transfer"}
              type="radio"
              value={"transfer"}
              className={
                paymentMethod === "transfer"
                  ? classes.btnPaymentMethodSelected
                  : classes.btnPaymentMethod
              }
              onClick={(e) => setPaymentMethod(e.currentTarget.value)}
            >
              Bank Transfer
            </Button>
            <Button
              id={"delivery"}
              type="radio"
              value={"delivery"}
              className={
                paymentMethod === "delivery"
                  ? classes.btnPaymentMethodSelected
                  : classes.btnPaymentMethod
              }
              onClick={(e) => setPaymentMethod(e.currentTarget.value)}
            >
              Pay on Delivery
            </Button>
          </ToggleButtonGroup>
        </div>
        {paymentMethod == "delivery" ? (
          <PayOnDelivery></PayOnDelivery>
        ) : (
          <BankTransfer></BankTransfer>
        )}

        <OrderTotal selectedProduct={props.selectedProduct}></OrderTotal>
        <Link to="/orderConfirmation">
          <ButtonPurchase text="Confirm Order"></ButtonPurchase>
        </Link>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;
