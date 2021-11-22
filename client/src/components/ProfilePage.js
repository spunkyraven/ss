import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import SpinnerPage from "./SpinnerPage";
import Typography from "@material-ui/core/Typography";
import { getProfile } from "../redux/actions/authActions";
import {
  getMyTrip,
  getTripCount,
  getreservedTrip,
  deleteTrip,
} from "../redux/actions/tripActions";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProfilePage = () => {
  //selector state
  const auth = useSelector((state) => state.auth);

  const trips = useSelector((state) => state.trips);
  const reservations = useSelector((state) => state.reservations);
  const count = useSelector((state) => state.trips.count);
  const isLoading = useSelector((state) => state.trips.isLoading);
  //Pagination
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  //dispatch action
  const dispatch = useDispatch();
  // component did mount

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getreservedTrip(id));
    console.log(id);

    dispatch(getMyTrip(page, limit, id));
  }, [dispatch, page, limit, id]);

  //delete
  const onDelete = (id) => {
    dispatch(deleteTrip(id));
    dispatch(getMyTrip(1, 3));
  };
  return (
    <div style={{}}>
      <Container>
        <Row>
          <Col sm={2}>
            <br />
            <Card style={{ width: "18rem" }}>
              {!auth.user ? (
                <Image
                  src="/public/images/avatar.jpg"
                  alt="profile picture"
                  width="100%"
                  height="280"
                />
              ) : (
                <Image
                  src="/images/avatar.jpg"
                  alt="profile picture"
                  width="100%"
                  height="280"
                />
              )}

              <Card.Body>
                <Card.Title>
                  {auth.user.firstName} {auth.user.lastName}
                </Card.Title>
                <Card.Text>🔗 {auth.user.role}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z"></path>
                    <path d="M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z"></path>
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z"></path>
                  </svg>
                  {auth.user.email}
                </ListGroupItem>
                <ListGroupItem> {auth.user.age} years old</ListGroupItem>
                <ListGroupItem>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path>
                  </svg>{" "}
                  {auth.user.phone}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="/editProfile">Edit</Card.Link>
                {auth.isAuth && auth.user && auth.user.role !== "driver" && (
                  <Card.Link href="/searchRide"></Card.Link>
                )}
              </Card.Body>
            </Card>
            <br />
          </Col>
          <br />

          <Col sm={10}>
            <br />
            <br />
            <br />
            <Typography>
              Your Rides Reservation List{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
              </svg>
            </Typography>{" "}
            {isLoading && <SpinnerPage />}{" "}
            <Container
              style={{
                display: "flex",
                justifyContent: "right",
                flexWrap: "wrap",
              }}
            >
              {reservations &&
                reservations.reservationList &&
                reservations.reservationList.map((reservations, index) => (
                  <Card
                    key={index}
                    style={{
                      marginLeft: "10px",
                      flex: "0 0 215px",
                      margin: "1em 10px",
                      border: "2px solid",
                    }}
                    border="danger"
                  >
                    <Card.Header>
                      Ride at <b>{reservations.dateTime}</b>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card.Title>
                            <i class="bi bi-circle"></i> {reservations.from}
                          </Card.Title>
                          <Card.Title>
                            <i class="bi bi-circle-fill"></i> {reservations.to}
                          </Card.Title>
                          <Card.Title>
                            <i class="bi bi-truck"></i> {reservations.carModel}
                          </Card.Title>
                          <Card.Title>
                            {reservations.price.$numberDecimal} DT
                          </Card.Title>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {reservations.tripGender === "male" && (
                            <i class="bi bi-gender-male">
                              {" "}
                              Male
                              <br />
                            </i>
                          )}{" "}
                          {reservations.tripGender === "female" && (
                            <i class="bi bi-gender-female">
                              {" "}
                              Female
                              <br />
                            </i>
                          )}{" "}
                          {reservations.tripGender === "mixed" && (
                            <i class="bi bi-gender-ambiguous">
                              {" "}
                              Mixed
                              <br />
                            </i>
                          )}{" "}
                          {reservations.luggage && (
                            <i class="bi bi-bag-plus">
                              {" "}
                              Luggage
                              <br />
                            </i>
                          )}
                          {reservations.music && (
                            <i class="bi bi-music-note-beamed">
                              {" "}
                              Music
                              <br />
                            </i>
                          )}{" "}
                          {reservations.airConditioned && (
                            <i class="bi bi-snow2">
                              {" "}
                              AirC
                              <br />
                            </i>
                          )}{" "}
                          {reservations.smoking && (
                            <i class="bi bi-wind">
                              {" "}
                              Smoking
                              <br />
                            </i>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <Row>
                        <Col>
                          <Button
                            variant="danger"
                            onClick={() => onDelete(reservations._id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </Card.Footer>
                    <Card.Footer>
                      <small className="text-muted">
                        Seating Available <b>{reservations.seatingCapacity}</b>
                      </small>
                    </Card.Footer>
                  </Card>
                ))}
            </Container>
            <Container>
              <Row>
                <Col sm={10}>
                  <Typography>Your Rides Suggestions List ...</Typography>{" "}
                  {isLoading && <SpinnerPage />}{" "}
                  <Container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {trips.tripList.length &&
                      trips.tripList.map((trip, index) => (
                        <Card
                          key={index}
                          style={{
                            marginLeft: "10px",
                            flex: "0 0 215px",
                            margin: "1em 10px",
                            border: "2px solid",
                          }}
                          border="danger"
                        >
                          <Card.Header>
                            Ride at <b>{trip.dateTime}</b>
                          </Card.Header>
                          <Card.Body>
                            <Row>
                              <Col>
                                <Card.Title>
                                  <i class="bi bi-circle"></i> {trip.from}
                                </Card.Title>
                                <Card.Title>
                                  <i class="bi bi-circle-fill"></i> {trip.to}
                                </Card.Title>
                                <Card.Title>
                                  <i class="bi bi-truck"></i> {trip.carModel}
                                </Card.Title>
                                <Card.Title>
                                  {trip.price.$numberDecimal} DT
                                </Card.Title>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                {trip.tripGender === "male" && (
                                  <i class="bi bi-gender-male">
                                    {" "}
                                    Male
                                    <br />
                                  </i>
                                )}{" "}
                                {trip.tripGender === "female" && (
                                  <i class="bi bi-gender-female">
                                    {" "}
                                    Female
                                    <br />
                                  </i>
                                )}{" "}
                                {trip.tripGender === "mixed" && (
                                  <i class="bi bi-gender-ambiguous">
                                    {" "}
                                    Mixed
                                    <br />
                                  </i>
                                )}{" "}
                                {trip.luggage && (
                                  <i class="bi bi-bag-plus">
                                    {" "}
                                    Luggage
                                    <br />
                                  </i>
                                )}
                                {trip.music && (
                                  <i class="bi bi-music-note-beamed">
                                    {" "}
                                    Music
                                    <br />
                                  </i>
                                )}{" "}
                                {trip.airConditioned && (
                                  <i class="bi bi-snow2">
                                    {" "}
                                    AirC
                                    <br />
                                  </i>
                                )}{" "}
                                {trip.smoking && (
                                  <i class="bi bi-wind">
                                    {" "}
                                    Smoking
                                    <br />
                                  </i>
                                )}
                              </Col>
                            </Row>
                          </Card.Body>
                          <Card.Footer>
                            <Row>
                              <Col>
                                <Button
                                  href={`/updateRide/${trip._id}`}
                                  variant="warning"
                                >
                                  Edit
                                </Button>
                              </Col>
                              <Col>
                                <Button
                                  variant="danger"
                                  onClick={() => onDelete(trip._id)}
                                >
                                  Delete
                                </Button>
                              </Col>
                            </Row>
                          </Card.Footer>
                          <Card.Footer>
                            <small className="text-muted">
                              Seating Available <b>{trip.seatingCapacity}</b>
                            </small>
                          </Card.Footer>
                        </Card>
                      ))}
                  </Container>
                  <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
