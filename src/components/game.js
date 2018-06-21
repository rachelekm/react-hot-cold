import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export class Game extends React.Component {
/*
  makeGuess(guess) {
    this.props.dispatch(makeGuess(guess));
  }

  restartGame() {
    this.props.dispatch(restartGame());
  }

  generateAuralUpdate() {
    this.props.dispatch(auralUpdate());
  }
*/
  render() {
    /*
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;
*/
    return (
      <div>
        <Header/>
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  }
}
