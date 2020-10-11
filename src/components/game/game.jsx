import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import {Artist} from '../artist/artist';
import {Genre} from '../genre/genre';

export class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }
  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];
    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }
    switch (question.type) {
      case GameType.ARTIST:
        return (
          <Artist
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
      case GameType.GENRE:
        return (
          <Genre
            question={question}
            onAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1,
              }));
            }}
          />
        );
    }
    return <Redirect to="/" />;
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired,
};

