import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const TripDetails = ({ trip }) => {
  const classes = useStyles();
  return (
    <Card
      style={{
        background: "#ffaa00",
        marginBottom: "10px",
      }}
      className={classes.card}
    >
      <CardContent className={classes.cardContent}>
        <Container>
          <Row>
            <Col>
              <Typography gutterBottom variant="h6" component="h6">
                <i className="bi bi-geo-alt">{trip.from}</i>
              </Typography>
              <Typography gutterBottom variant="h6" component="h6">
                <i className="bi bi-cursor">{trip.to}</i>
              </Typography>
            </Col>
            <Col>
              <span>{trip.price.$numberDecimal} DT</span>
            </Col>
            <Col>
              <i className="bi bi-truck"></i>
              <i className="fa fa-car" aria-hidden="true"></i>
              <span> {trip.carModel}</span>
            </Col>
          </Row>
        </Container>
      </CardContent>
      <CardActions>
        <Button href="/searchRide" size="xs" color="primary">
          RESERVE NOW!
        </Button>
      </CardActions>
    </Card>
  );
};

export default TripDetails;
