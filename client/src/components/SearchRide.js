import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
import { Container, Row, Col } from "react-bootstrap";
import SpinnerPage from "./SpinnerPage";
import TripAllDetails from "./TripAllDetails";
import { Input } from "@material-ui/core";
import { updateRole } from "../redux/actions/authActions";
import {
  getAllTrips,
  getTripCount,
  findTrips,
} from "../redux/actions/tripActions";

const mapBoxToken =
  "http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN";

const SearchRide = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateTime, setDateTime] = useState(null);
  const [fromCoordinate, setFromCoordinate] = useState({
    lat: null,
    lng: null,
  });
  const [toCoordinate, setToCoordinate] = useState({
    lat: null,
    lng: null,
  });

  //dispatch action
  const dispatch = useDispatch();
  //selector state
  const trips = useSelector((state) => state.trips);
  const isLoading = useSelector((state) => state.trips.isLoading);
  const count = useSelector((state) => state.trips.count);
  const auth = useSelector((state) => state.auth);
  //Pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  // component did mount
  useEffect(() => {
    dispatch(getTripCount());
    dispatch(getAllTrips(page, limit));
  }, []);
  //pagination
  const handlePageChange = (e, p) => {
    setPage(p);
    dispatch(getAllTrips(p, limit));
  };
  //role

  const id = auth.user && auth.user.user._id;
  const info = { role: "driver" };
  const handleRoleDriver = (e) => {
    e.preventDefault();
    dispatch(updateRole(id, info));
    history.push("/offerRide");
  };
  //router dom
  const history = useHistory();

  const suggestionSelectFrom = async (result, lat, lng, text) => {
    setFrom(result);
    setFromCoordinate({ lat: lat, lng: lng });
  };
  const suggestionSelectTo = async (result, lat, lng, text) => {
    setTo(result);
    setToCoordinate({ lat: lat, lng: lng });
  };

  //find
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(findTrips(from, to, dateTime));
  };
  //reset
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(getTripCount());
    dispatch(getAllTrips(page, limit));
  };

  return (
    <div>
      <Container
        style={{
          background: "#ffaa00",
          marginTop: "90px",
          paddingBottom: "30px",
        }}
      >
        <br />
        <Row>
          <Col>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Search a Ride
            </Typography>
          </Col>
          <Col></Col>
          <Col>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRoleDriver}
              style={{ marginLeft: "5px" }}
            >
              Become a Rider?
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <i class="bi bi-circle"> Depart Point</i>
            <MapboxAutocomplete
              publicKey="pk.eyJ1IjoiZG91c3MiLCJhIjoiY2tyZ3h1bGNuMDNteTJvcGVueThzNnZmMiJ9.LhxHYK7IQDlS6VZTSiPu3A"
              inputClass="form-control search"
              placeholder="From ..."
              onSuggestionSelect={suggestionSelectFrom}
              value={from}
              country="tn"
              resetSearch={false}
            />
          </Col>
          <Col>
            <i class="bi bi-circle-fill"> Arrival Point</i>
            <MapboxAutocomplete
              publicKey="pk.eyJ1IjoiZG91c3MiLCJhIjoiY2tyZ3h1bGNuMDNteTJvcGVueThzNnZmMiJ9.LhxHYK7IQDlS6VZTSiPu3A"
              inputClass="form-control search"
              placeholder="To ..."
              onSuggestionSelect={suggestionSelectTo}
              value={to}
              country="tn"
              resetSearch={false}
            />
          </Col>
          <Col>
            <i class="bi bi-calendar-week"> Date of departure</i>
            <br />
            <Input
              type="date"
              id="datetime-local"
              defaultValue={Date.now()}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDateTime(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              style={{ marginLeft: "5px" }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        {isLoading && <SpinnerPage />}
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {trips.tripList.length && <TripAllDetails trips={trips} />}
        </div>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <Pagination
              color="secondary"
              count={Math.ceil(count / limit)}
              onChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchRide;
