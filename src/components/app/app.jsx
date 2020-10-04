import React from "react";
import propTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Welcome} from "../welcome/welcome";
import {SignIn} from "../sign-in/sign-in";
import {Result} from "../result/result";
import {GameOver} from "../game-over/game-over";
import {Genre} from "../genre/genre";
import {Artist} from "../artist/artist";

export const App = (props) => {
  const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <SignIn/>
        </Route>
        <Route path="/lose" exact>
          <GameOver/>
        </Route>
        <Route path="/result" exact>
          <Result/>
        </Route>
        <Route path="/dev-artist" exact>
          <Artist/>
        </Route>
        <Route path="/dev-genre" exact>
          <Genre/>
        </Route>
        <Route path="/">
          <Welcome errorsCount = {errorsCount}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: propTypes.number.isRequired
};
