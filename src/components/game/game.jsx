import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import {Artist} from '../artist/artist';
import {Genre} from '../genre/genre';
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Mistakes from "../mistakes/mistakes";
import artistQuestionProp from "../artist/artist.prop";
import genreQuestionProp from "../genre/genre.prop";

const GenreQuestionScreenWrapped = withAudioPlayer(Genre);
const ArtistQuestionScreenWrapped = withAudioPlayer(Artist);
const Game = (props) => {
  const {questions, step, onUserAnswer, resetGame, mistakes} = props;
  const question = questions[step];
  if (step >= questions.length || !question) {
    resetGame();
    return (
      <Redirect to="/" />
    );
  }
  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </ArtistQuestionScreenWrapped>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </GenreQuestionScreenWrapped>
      );
  }
  return <Redirect to="/" />;
};


Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired),
  step: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
});

export {Game};
export default connect(mapStateToProps, mapDispatchToProps)(Game);

