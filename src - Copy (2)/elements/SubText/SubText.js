import classes from "./SubText.module.css";

const SubText = (props) => {
  return <div className={classes.subText}>{props.subText}</div>;
};

export default SubText;
