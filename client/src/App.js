import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import RegisterPage from "./components/RegitserPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import EditProfile from "./components/EditProfile";
import SearchRide from "./components/SearchRide";
import OfferRide from "./components/OfferRide";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import AboutUs from "./components/AboutUs";
import UpdateRide from "./components/UpdateRide";
import ReserveRide from "./components/ReserveRide";
import PrivateRoute from "./privateRoutes/privateRoute";
import PrivateRouteSearch from "./privateRoutes/privateRouteSearch";
import PrivateRouteOffer from "./privateRoutes/privateRouteOffer";

function App({ match }) {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <PrivateRoute exact path="/profile/:id" component={ProfilePage} />
          <PrivateRoute exact path="/editProfile" component={EditProfile} />
          <PrivateRoute exact path="/searchRide" component={SearchRide} />
          <PrivateRouteSearch
            exact
            path="/reserveRide/:id"
            match={match}
            component={ReserveRide}
          />
          <PrivateRoute exact path="/offerRide" component={OfferRide} />
          <PrivateRouteOffer
            exact
            path="/updateRide/:id"
            match={match}
            component={UpdateRide}
          />
        </Switch>
        <FooterBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
