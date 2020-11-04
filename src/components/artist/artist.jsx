import React from "react";
import PropTypes from "prop-types";
import artistProp from "./artist.prop";

export const Artist = (props) => {
  const {onAnswer, question, renderPlayer, children} = props;
  const {answers, song} = question;
  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" styles="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
        </svg>

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(song.src, 0)}
          </div>
        </div>
        <form className="game__artist">
          {answers.map((answer, i) => (
            <div key={answer.id} className="artist">
              <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                onChange={(evt) => {
                  evt.preventDefault();
                  onAnswer(question, answer);
                }}/>
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

Artist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: artistProp,
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
