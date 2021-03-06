import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import { Footer, Navbar } from "./common";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import PizzaPage from "./PizzaPage";

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/pizza/:pizzaId" component={PizzaPage} />
        <Route exact path="/:unfoundLocation" component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
