import { Button } from "react-bootstrap";
import classes from "./ButtonMain.module.css";

const ButtonMain = (props) => {
  return <Button className={classes.btn}>{props.text}</Button>;
};

export default ButtonMain;
