import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import Message from "./Message";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

import { addTrip, getMyTrip } from "../redux/actions/tripActions";
import { Input } from "@material-ui/core";

const OfferRide = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.trips.isLoading);
  const errors = useSelector((state) => state.trips.errors);
  const [newTrip, setNewTrip] = useState({
    from: "",
    to: "",
    from_lat: null,
    from_lng: null,
    to_lng: null,
    to_lat: null,
    carModel: "",
    price: null,
    dateTime: "",
    seatingCapacity: null,
    tripGender: "",
    luggage: false,
    music: false,
    smoking: false,
    airConditioned: false,
  });
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromCoordinate, setFromCoordinate] = useState({
    lat: null,
    lng: null,
  });
  const [toCoordinate, setToCoordinate] = useState({
    lat: null,
    lng: null,
  });

  const suggestionSelectFrom = async (result, lat, lng, text) => {
    setFrom(result);
    setFromCoordinate({ lat: lat, lng: lng });
    setNewTrip({ ...newTrip, from: result, from_lat: lat, from_lng: lng });
  };
  const suggestionSelectTo = async (result, lat, lng, text) => {
    setTo(result);
    setToCoordinate({ lat: lat, lng: lng });
    setNewTrip({ ...newTrip, to: result, to_lat: lat, to_lng: lng });
  };

  //seating number
  const [seating, setSeating] = useState("");
  const [open, setOpen] = useState(false);

  const handleChangeSeating = (event) => {
    setSeating(event.target.value);
    setNewTrip({ ...newTrip, seatingCapacity: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // Gender Trip
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
    setNewTrip({ ...newTrip, tripGender: event.target.value });
  };
  //luggage
  const [luggage, setLuggage] = useState({
    checkedA: true,
  });

  const handleChangeCheckLuggage = (event) => {
    setLuggage({ ...luggage, [event.target.name]: event.target.checked });
    setNewTrip({ ...newTrip, luggage: event.target.checked });
  };
  //music
  const [music, setMusic] = useState({
    checkedB: true,
  });

  const handleChangeCheckMusic = (event) => {
    setMusic({ ...music, [event.target.name]: event.target.checked });
    setNewTrip({ ...newTrip, music: event.target.checked });
  };
  //smoking
  const [smoking, setSmoking] = useState({
    checkedC: true,
  });

  const handleChangeCheckSmoking = (event) => {
    setSmoking({ ...smoking, [event.target.name]: event.target.checked });
    setNewTrip({ ...newTrip, smoking: event.target.checked });
  };
  //airConditioned
  const [airConditioned, setAirConditioned] = useState({
    checkedD: true,
  });

  const handleChangeCheckairConditioned = (event) => {
    setAirConditioned({
      ...airConditioned,
      [event.target.name]: event.target.checked,
    });
    setNewTrip({ ...newTrip, airConditioned: event.target.checked });
  };

  //router dom
  const history = useHistory();
  //dispatch action
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTrip(newTrip));
  };

  return (
    <div>
      <Container
        style={{
          background: "#ffaa00",
          marginTop: "90px",
          paddingTop: "10px",
          paddingBottom: "20px",
        }}
      >
        <br />
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Publish a Ride
        </Typography>

        {errors && <Message errors={errors} />}

        <br />
        <Row>
          <Col xs={6}>
            <MapboxAutocomplete
              publicKey="pk.eyJ1IjoiZG91c3MiLCJhIjoiY2tyZ3h1bGNuMDNteTJvcGVueThzNnZmMiJ9.LhxHYK7IQDlS6VZTSiPu3A"
              inputClass="form-control search"
              placeholder="From ..."
              onSuggestionSelect={suggestionSelectFrom}
              value={from}
              country="tn"
              resetSearch={false}
              required
            />
            <MapboxAutocomplete
              publicKey="pk.eyJ1IjoiZG91c3MiLCJhIjoiY2tyZ3h1bGNuMDNteTJvcGVueThzNnZmMiJ9.LhxHYK7IQDlS6VZTSiPu3A"
              inputClass="form-control search"
              placeholder="To ..."
              onSuggestionSelect={suggestionSelectTo}
              value={to}
              country="tn"
              resetSearch={false}
            />

            <Form.Control
              name="carModel"
              required="required"
              type="text"
              placeholder="Car Model"
              onChange={(e) =>
                setNewTrip({ ...newTrip, carModel: e.target.value })
              }
            />
            <br />
            <Form.Control
              name="price"
              required="required"
              type="text"
              placeholder="Price by place (DT)"
              onChange={(e) =>
                setNewTrip({ ...newTrip, price: e.target.value })
              }
            />
            <br />
            <Row>
              <Col xs={6}>
                <Input
                  id="datetime-local"
                  label=" Trip Date/Time"
                  type="date"
                  defaultValue={Date.now()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) =>
                    setNewTrip({ ...newTrip, dateTime: e.target.value })
                  }
                />
              </Col>
              <Col xs={6}>
                <InputLabel id="demo-controlled-open-select-label">
                  Seating capacity
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={seating}
                  onChange={handleChangeSeating}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <br />
            <FormLabel>Gender Trip</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="mixed"
                control={<Radio />}
                label="Mixed"
              />
            </RadioGroup>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={luggage.checked}
                  onChange={handleChangeCheckLuggage}
                  name="checkedA"
                />
              }
              label="Luggage"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={luggage.checked}
                  onChange={handleChangeCheckMusic}
                  name="checkedB"
                />
              }
              label="Music"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={smoking.checked}
                  onChange={handleChangeCheckSmoking}
                  name="checkedC"
                />
              }
              label="Smoking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={airConditioned.checked}
                  onChange={handleChangeCheckairConditioned}
                  name="checkedD"
                />
              }
              label="Air Conditioned"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>{" "}
            {isLoading && (
              <Button variant="danger" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>
            )}{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Validate
            </Button>
          </Col>
          <br />
          <br />
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default OfferRide;
