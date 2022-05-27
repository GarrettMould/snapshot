import { Form } from "react-bootstrap";
import FormTitle from "../FormTitle/FormTitle";
import ButtonPurchase from "../ButtonPurchase/ButtonPurchase";
import BankTransfer from "../BankTransfer/BankTransfer";
import classes from "./FillFormDevelop.module.css";

const FillFormDevelop = (props) => {
  return (
    <div className={classes.padding}>
      <FormTitle title="Film Development Form"></FormTitle>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="phone"
            id="email"
            placeholder="Ex: hanofilm@gmail.com"
          />
          <Form.Text className="text-muted">
            Digital copies of your photos will be sent to your email.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" id="phone" placeholder="Ex: 0824675798" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="address"
            id="address"
            placeholder="Ex: 42 Ham Long, Hoan Kiem, Hanoi"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={props.onDropDownChange}
          >
            <option>Method</option>
            <option value="delivery">Pay on Delivery</option>
            <option value="transfer">Bank Transfer</option>
          </Form.Select>
        </Form.Group>

        {props.paymentMethod === "transfer" ? (
          <BankTransfer></BankTransfer>
        ) : null}

        <ButtonPurchase text="Submit"></ButtonPurchase>
      </Form>
    </div>
  );
};

export default FillFormDevelop;
