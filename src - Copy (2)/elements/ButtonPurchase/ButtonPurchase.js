import { Button } from "react-bootstrap";
import classes from "./ButtonPurchase.module.css";

const ButtonPurchase = (props) => {
  return (
    <div className="d-flex justify-content-center pt-3">
      <Button onClick={props.onClick} className={classes.btn}>
        {props.text}
      </Button>
    </div>
  );
};

export default ButtonPurchase;
