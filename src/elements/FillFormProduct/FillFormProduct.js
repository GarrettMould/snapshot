import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormTitle from "../FormTitle/FormTitle";
import ButtonPurchase from "../ButtonPurchase/ButtonPurchase";
import BankDetails from "../BankDetails/BankDetails";
import classes from "./FillFormProduct.module.css";

const FillFormProduct = (props) => {
  return (
    <div className={classes.padding}>
      <FormTitle title="Customer Details"></FormTitle>
      <Form>
        <Form.Group className="mb-4 pt-2" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="phone"
            id="email"
            placeholder="Ex: hanofilm@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" id="phone" placeholder="Ex: 0824674798" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="address"
            id="address"
            placeholder="Ex: 42 Ham Long, Hoan Kiem, Hanoi"
          />
        </Form.Group>
        <Link to="/paymentConfirmation">
          <ButtonPurchase text="Proceed to Pay"></ButtonPurchase>
        </Link>
      </Form>
    </div>
  );
};

export default FillFormProduct;
