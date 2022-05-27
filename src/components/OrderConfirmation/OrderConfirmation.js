import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import shutterLogo from "../../Images/shutterLogo.png";
import ButtonPurchase from "../../elements/ButtonPurchase/ButtonPurchase";
import classes from "./OrderConfirmation.module.css";
const OrderConfirmation = (props) => {
  return (
    <div className={classes.padding}>
      <Card className={classes.card}>
        <div className="d-flex flex-column align-items-center">
          <div className={classes.title}>Order Confirmed!</div>
          <div>
            <img className={classes.shutterLogo} src={shutterLogo}></img>
          </div>
          <div className="mb-3">
            <div className={classes.estimatedDelivery}>Estimated Delivery:</div>
            <div className={classes.date}>Thursday, March 18th</div>
          </div>

          <div className={classes.note}>
            We've emailed you a confirmation and we'll call you when your order
            arrives.
          </div>
        </div>
        <Link to="/">
          <ButtonPurchase text="Close Window"></ButtonPurchase>
        </Link>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
