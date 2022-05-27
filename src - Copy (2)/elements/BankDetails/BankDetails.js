import { Container } from "react-bootstrap";
import MainText from "../MainText/MainText";
import SubText from "../SubText/SubText";
import classes from "./BankDetails.module.css";
const BankDetails = (props) => {
  return (
    <div className={classes.padding}>
      <Container>
        <MainText mainText="Bank Details"></MainText>
        <div className="mt-3">
          <div className="d-flex justify-content-column mb-2">
            <div className={classes.bold}>Bank Name:</div>
            <div className={classes.regular}>Vietcom Bank</div>
          </div>
          <div className="d-flex justify-content-column mb-2">
            <div className={classes.bold}>Account Holder Name:</div>
            <div className={classes.regular}>Garrett Matthew Mould</div>
          </div>
          <div className="d-flex justify-content-column mb-2">
            <div className={classes.bold}>Account Number:</div>
            <div className={classes.regular}>00101897452</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BankDetails;
