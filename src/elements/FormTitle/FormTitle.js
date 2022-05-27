import classes from "./FormTitle.module.css";

const FormTitle = (props) => {
  return <div className={classes.titleText}>{props.title}</div>;
};

export default FormTitle;
