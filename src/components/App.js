import React, { Component } from 'react';
import GuessCount from './GuessCount'
import Card from './Card'
import './styles/App.css';

class App extends Component {
  handleCardClick(card) {
    console.log(card, 'clicked');
  }
  render() {
    const won = new Date().getSeconds() % 2 === 0;
    return <div className="memory">
      <GuessCount guesses={0} />
      <Card card="&diams;" feedback="hidden" onClick={this.handleCardClick}/>
      <Card card="&hearts;" feedback="justMatched" onClick={this.handleCardClick}/>
      <Card card="&clubs;" feedback="justMismatched" onClick={this.handleCardClick}/>
      <Card card="&spades;" feedback="visible" onClick={this.handleCardClick}/>
      <Card card="&diams;" feedback="hidden" onClick={this.handleCardClick}/>
      <Card card="&hearts;" feedback="justMatched" onClick={this.handleCardClick}/>
      {won && <p>GAGNÉ !</p>}
    </div>
  }
}

export default App
