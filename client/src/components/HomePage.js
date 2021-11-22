import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TripDetails from "./TripDetails";
import { Row, Col, Image } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./HomePage.css";
import { getAllTrips } from "../redux/actions/tripActions";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7, 0, 5),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 4,
  },
}));
const cards = [1, 2, 3, 4, 5, 6];

function HomePage() {
  const classes = useStyles();

  //dispatch action
  const dispatch = useDispatch();
  //selector state
  const trips = useSelector((state) => state.trips);
  // component did mount
  useEffect(() => {
    dispatch(getAllTrips(1, 6));
  }, []);
  return (
    <main>
      <div className={classes.heroContent}>
        <br />
        <br />
        <br />
        <Container>
          <div className="homePic">
            <Image src="/images/BACK.PNG" />
          </div>
          <Row>
            <Col>
              <br />
              <br />
              <br />

              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                JoyRide <br />
                Your pick of rides at low prices
              </Typography>
              <Typography
                variant="h8"
                align="center"
                color="textSecondary"
                paragraph
              >
                No matter where you’re going find the perfect ride from our wide
                range of destinations and routes at low prices.
                <br />
                We take the time to get to know each of our members
                <br /> We check reviews, profiles and IDs, so you know who
                you’re travelling with and can book your ride at ease on our
                secure platform.
              </Typography>
            </Col>
          </Row>
          <div className={classes.heroButtons}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Button href="/searchRide" variant="contained" color="primary">
                  Search a Ride
                </Button>
              </Grid>
              <Grid item>
                <Button href="/offerRide" variant="outlined" color="aquamarine">
                  Offer a Ride
                </Button>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <br />
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Why we choose JoyRide
          </Typography>
          <br />
          <Row>
            <Col className="icons">
              <i className="bi bi-person-fill"></i>
              <Typography
                variant="h7"
                align="center"
                color="textPrimary"
                paragraph
              >
                ALWAYS IN CONTROL
              </Typography>
              <Typography
                variant="h7"
                align="center"
                color="textPrimary"
                paragraph
              >
                Verified Members that means you know exactly who you travelling
                with .
              </Typography>
            </Col>
            <Col className="icons">
              <i className="bi bi-file-earmark-person-fill"></i>
              <Typography
                variant="h7"
                align="center"
                color="textPrimary"
                paragraph
              >
                RIDE WITH CONFIDENCE
              </Typography>
              <Typography
                variant="h7"
                align="center"
                color="textPrimary"
                paragraph
              >
                ID verification so you know who you’re travelling with and can
                book your ride at ease on our secure platform .
              </Typography>
            </Col>
            <Col className="icons">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              <Typography
                variant="h7"
                align="center"
                color="textPrimary"
                paragraph
              >
                YOU RIDE IS FULLY INSURED
              </Typography>
              <Typography
                variant="h7"
                align="center"
                color="textPrimary"
                paragraph
              >
                You can get comfort, spend less money and meet new people .
              </Typography>
            </Col>
          </Row>
          <br />
          <br />
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Thousands of departures every day
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            margin="10px"
          >
            WHERE DO YOU WANT TO GO?
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {trips.tripList.length &&
          trips.tripList.map((trip, index) => (
            <TripDetails key={index} trip={trip}></TripDetails>
          ))}
      </Container>
    </main>
  );
}

export default HomePage;
