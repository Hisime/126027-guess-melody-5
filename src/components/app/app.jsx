import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Welcome} from "../welcome/welcome";
import {SignIn} from "../sign-in/sign-in";
import {Result} from "../result/result";
import {GameOver} from "../game-over/game-over";
import {Game} from "../game/game";
import artistProp from "../artist/artist.prop";
import genreProp from "../genre/genre.prop";

export const App = (props) => {
  const {errorsCount, questions} = props;
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
        <Route path="/game" exact>
          <Game
            questions={questions}/>
        </Route>
        <Route
          path="/"
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistProp, genreProp]).isRequired
  ),
};
