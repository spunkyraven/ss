import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./LoginPage.css";
import { Alert } from "react-bootstrap";

import { login } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    color: "black",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(4, 0, 6),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  //local state
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  // selector state
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.auth.errors);

  // dispatch action
  const dispatch = useDispatch();
  // submit action
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(login(info));
  };
  //useEffect render if isAuth is changed
  const history = useHistory();
  useEffect(() => {
    if (auth.isAuth) history.push("/");
  }, [auth.isAuth]);

  return (
    <Container className="card" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h6">
          Sign in
        </Typography>

        {errors && (
          <Alert variant="danger">
            {errors[0] ? errors[0].msg : null} <br />
            {errors.email ? errors.email.msg : null} <br />
            {errors.password ? errors.password.msg : null} <br />
          </Alert>
        )}

        <form className={classes.form} noValidate onSubmit={handleChange}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
