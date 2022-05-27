import classes from "./MainText.module.css";

const MainText = (props) => {
  return <div className={classes.mainText}>{props.mainText}</div>;
};

export default MainText;
