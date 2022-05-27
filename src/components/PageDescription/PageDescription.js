import { Container } from "react-bootstrap";
import MainPhoto from "../../Images/main-photo.png";
import SnapShotLogo from "../../Images/flame-photographing.png";
import ButtonMain from "../../elements/ButtonMain/ButtonMain";
import MainText from "../../elements/MainText/MainText";
import SubText from "../../elements/SubText/SubText";
import classes from "./PageDescription.module.css";
import canonae from "../../Images/canon_ae1_program.png";

const PageDescription = (props) => {
  return (
    <div className={classes.padding}>
      <Container>
        <div className=" w-100 d-flex flex-column align-items-center">
          <img className={classes.image} src={MainPhoto}></img>
          <MainText mainText="Capture life's most precious moments"></MainText>
          <SubText
            subText="Hano Film has the city's widest selection of 35mm film cameras to
            help make your memories last"
          ></SubText>

          <ButtonMain text="Contact"></ButtonMain>
        </div>
      </Container>
    </div>
  );
};

export default PageDescription;
