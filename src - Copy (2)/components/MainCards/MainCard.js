import { Container, Card } from "react-bootstrap";

import classes from "./MainCard.module.css";
import canonAutoboyLunaXL from "../../Images/canon_autoboy_luna_xl.png";
import "bootstrap/dist/css/bootstrap.min.css";

const MainCard = (props) => {
  return (
    <div className={classes.padding}>
      <Container className="d-flex justify-content-center">
        <Card className={classes.mainCard}>
          <div className={classes.banner}></div>
          <Card.Img
            className={classes.image}
            src={props.image}
            alt="Card image"
          />
          <Card.ImgOverlay className="d-flex align-items-end pb-3">
            <Card.Title className={classes.cardTitle}>{props.text}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  );
};

export default MainCard;
