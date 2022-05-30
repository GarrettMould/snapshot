import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormTitle from "../FormTitle/FormTitle";
import ButtonPurchase from "../ButtonPurchase/ButtonPurchase";
import BankDetails from "../BankDetails/BankDetails";
import classes from "./FillFormProduct.module.css";

const FillFormProduct = (props) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();

  var isActive;

  if (!name || !email || !phoneNumber || !address) {
    isActive = false;
  } else {
    isActive = true;
  }

  return (
    <div className={classes.padding}>
      <FormTitle title="Customer Details"></FormTitle>
      <Form>
        <Form.Group className="mb-4 pt-2" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="phone"
            id="email"
            placeholder="Ex: hanofilm@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            id="phone"
            placeholder="Ex: 0824674798"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="address"
            id="address"
            placeholder="Ex: 42 Ham Long, Hoan Kiem, Hanoi"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Link to={isActive ? "/paymentConfirmation" : "#"}>
          <div className="d-flex justify-content-center pb-3 pt-3">
            <Button
              disabled={!name || !email || !phoneNumber || !address}
              className={classes.btn}
            >
              Proceed to Pay
            </Button>
          </div>
        </Link>
      </Form>
    </div>
  );
};

export default FillFormProduct;
