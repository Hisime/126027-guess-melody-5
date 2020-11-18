import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import {GameType, MAX_MISTAKE_COUNT} from '../../const';
import {Artist} from '../artist/artist';
import Genre from '../genre/genre';
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Mistakes from "../mistakes/mistakes";
import artistQuestionProp from "../artist/artist.prop";
import genreQuestionProp from "../genre/genre.prop";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";

const GenreQuestionScreenWrapped = withAudioPlayer(withUserAnswer(Genre));
const ArtistQuestionScreenWrapped = withAudioPlayer(Artist);
const Game = (props) => {
  const {
    questions,
    step,
    onUserAnswer,
    mistakes} = props;
  const question = questions[step];
  if (mistakes >= MAX_MISTAKE_COUNT) {
    return (
      <Redirect to="/lose" />
    );
  }
  if (step >= questions.length || !question) {
    return (
      <Redirect to="/result" />
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
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions,
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

