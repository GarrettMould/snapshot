import classes from "./BankTransfer.module.css";
import MainText from "../MainText/MainText";
import ButtonPurchase from "../ButtonPurchase/ButtonPurchase";
import { Container } from "react-bootstrap";

const BankTransfer = (props) => {
  return (
    <div className={classes.padding}>
      <Container>
        <div className={classes.mainText}>Bank Information</div>
        <div className="mt-4 mb-4">
          <div className="d-flex justify-content-between mb-3">
            <div className={classes.bold}>Bank Name:</div>
            <div className={classes.regular}>Vietcom Bank</div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className={classes.bold}>Account Holder Name:</div>
            <div className={classes.regular}>Garrett Matthew Mould</div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className={classes.bold}>Account Number:</div>
            <div className={classes.regular}>00101897452</div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div className={classes.bold}>Memo:</div>
            <div className={classes.regular}>Last Name + Item</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BankTransfer;
