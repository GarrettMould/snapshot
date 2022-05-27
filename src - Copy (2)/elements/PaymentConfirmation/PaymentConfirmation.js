import { useState } from "react";
import {
  Form,
  Card,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
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
            <ToggleButton
              id={"transfer"}
              type="radio"
              value={"transfer"}
              className={classes.btnPaymentMethod}
              onChange={(e) => setPaymentMethod(e.currentTarget.value)}
            >
              Bank Transfer
            </ToggleButton>
            <ToggleButton
              id={"delivery"}
              type="radio"
              value={"delivery"}
              className={classes.btnPaymentMethod}
              onChange={(e) => setPaymentMethod(e.currentTarget.value)}
            >
              Pay on Delivery
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {paymentMethod == "delivery" ? (
          <PayOnDelivery></PayOnDelivery>
        ) : (
          <BankTransfer></BankTransfer>
        )}

        <OrderTotal selectedProduct={props.selectedProduct}></OrderTotal>
        <ButtonPurchase text="Confirm Order"></ButtonPurchase>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;
