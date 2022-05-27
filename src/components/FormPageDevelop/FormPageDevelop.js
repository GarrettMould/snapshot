import { Container, Form, Button } from "react-bootstrap";
import classes from "./FormPageDevelop.module.css";
import MainText from "../../elements/MainText/MainText";
import SubText from "../../elements/SubText/SubText";
import FillFormDevelop from "../../elements/FillFormDevelop/FillFormDevelop";
import FujiC200 from "../../Images/fuji_C200.png";
import ButtonPurchase from "../../elements/ButtonPurchase/ButtonPurchase";

const FormPageDevelop = (props) => {
  return (
    <div className={classes.padding}>
      <Container>
        <img className={classes.fillerImage} src={FujiC200}></img>
        <MainText mainText="Need film developed? Hano Film is here to help."></MainText>
        <SubText subText="Fill out the form below and Hano Film will develop your film, with pick and delivery included."></SubText>
        <ButtonPurchase
          text="Open Form"
          onClick={props.onClick}
        ></ButtonPurchase>
        {props.display ? (
          <FillFormDevelop
            paymentMethod={props.paymentMethod}
            onDropDownChange={props.onDropDownChange}
            displayAddress={props.displayAddress}
            checkboxClick={props.checkboxClick}
          ></FillFormDevelop>
        ) : null}
      </Container>
    </div>
  );
};

export default FormPageDevelop;
