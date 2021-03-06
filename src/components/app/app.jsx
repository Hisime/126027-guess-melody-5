import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Welcome} from "../welcome/welcome";
import {SignIn} from "../sign-in/sign-in";
import Result from "../result/result";
import {GameOver} from "../game-over/game-over";
import Game from "../game/game";
import {MAX_MISTAKE_COUNT} from "../../const";


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <SignIn/>
        </Route>
        <Route exact
          path="/lose"
          render={({history}) => (
            <GameOver
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact
          path="/result"
          render={({history}) => (
            <Result
              onReplayButtonClick={() => history.push(`/game`)}
            />)}
        />
        <Route path="/game" exact>
          <Game
            errorsCount={MAX_MISTAKE_COUNT}/>
        </Route>
        <Route
          path="/"
          render={({history}) => (
            <Welcome
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};
