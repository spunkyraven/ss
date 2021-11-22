import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteOffer = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuth && auth.user && auth.user.role === "driver" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/searchRide" />
        )
      }
    />
  );
};

export default PrivateRouteOffer;
