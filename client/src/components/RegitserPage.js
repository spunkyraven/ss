import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert } from "react-bootstrap";

import { register } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegitserPage = () => {
  const classes = useStyles();
  //state for profilePic
  const [selectedImage, setSelectedImage] = useState("");
  //state for others
  const [info, setInfo] = useState({
    fisrtName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    ProfilePic: null,
    Attachment: null,
  });

  // selector state
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.auth.errors);
  // dispatch action
  const dispatch = useDispatch();
  // submit action
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(register(info));
  };
  //useEffect render if isAuth is changed
  const history = useHistory();
  useEffect(() => {
    if (auth.isRegistred) history.push("/login");
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {errors && (
          <Alert variant="danger">
            {errors[0] ? errors[0].msg : null} <br />
            {errors.firstName ? errors.firstName.msg : null} <br />
            {errors.lastName ? errors.lastName.msg : null} <br />
            {errors.email ? errors.email.msg : null} <br />
            {errors.password ? errors.password.msg : null} <br />
            {errors.age ? errors.age.msg : null} <br />
            {errors.phone ? errors.phone.msg : null} <br />
            {errors.profilePic ? errors.profilePic.msg : null}
          </Alert>
        )}

        <form className={classes.form} noValidate onSubmit={handleChange}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) =>
                  setInfo({ ...info, firstName: e.target.value })
                }
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setInfo({ ...info, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="age"
                name="age"
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                onChange={(e) => setInfo({ ...info, age: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                name="image"
                alt="profile pic"
                width="150"
                height="150"
                src={selectedImage || "/images/avatar.jpg"}
              />
              <br />
              <input type="file" name="profilePic" accept="images/*" />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegitserPage;
