import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import { Link as LinkR } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "./NavBar.css";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { getProfile, logout } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 4,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  // selector state
  const auth = useSelector((state) => state.auth);
  console.log();
  // dispatch actions
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#2E3B55" }} position="fixed">
        <Toolbar>
          {!auth.isAuth && (
            <>
              <Typography variant="h5" style={{ fontSize: "30px" }}>
                <Link href="/aboutUs" style={{ color: "#ffaa00" }}>
                  JoyRide
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link href="/" style={{ color: "#ffaa00" }}>
                  Home
                </Link>
              </Typography>

              <Typography variant="h6" className={classes.title}>
                <Link href="/login" style={{ color: "#ffaa00" }}>
                  Login
                </Link>
              </Typography>

              <Typography variant="h6" className={classes.title}>
                <Link href="/register" style={{ color: "#ffaa00" }}>
                  Register
                </Link>
              </Typography>
            </>
          )}
          {auth.isAuth && (
            <>
              <Typography variant="h6" style={{ fontSize: "30px" }}>
                <Link href="/aboutUs" style={{ color: "#ffaa00" }}>
                  JoyRide
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link href="/" style={{ color: "#ffaa00" }}>
                  Home
                </Link>
              </Typography>
              {auth.isAuth && auth.user && auth.user.role === "driver" ? (
                <Typography variant="h6" className={classes.title}>
                  <Link href="/offerRide" style={{ color: "#ffaa00" }}>
                    Offer a Ride
                  </Link>
                </Typography>
              ) : (
                <Typography variant="h6" className={classes.title}>
                  <Link href="/searchRide" style={{ color: "#ffaa00" }}>
                    Find a Ride
                  </Link>
                </Typography>
              )}
              <Typography variant="h6" className={classes.title}>
                <LinkR
                  to={`/profile/${auth.user && auth.user._id}`}
                  style={{ color: "#ffaa00" }}
                >
                  Profile
                </LinkR>
              </Typography>
              <Typography variant="h6" className={classes.title}>
                <Link href="/" style={{ color: "#ffaa00" }}>
                  <MenuItem onClick={() => dispatch(logout())}>LOGOUT</MenuItem>
                </Link>
              </Typography>

              <br />
              <br />
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                ></IconButton>
                <br />
                <br />
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <Link href="/profile">
                    <MenuItem onClick={() => dispatch(getProfile())}>
                      Profile
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
