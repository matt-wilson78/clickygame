import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import albums from "./albums.json"
import './App.css';

class App extends Component {

  state = {
    albums: albums,
    score: 0,
    topScore: 0
  }

  randomizer = albums => {
    const currentIndex = albums.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = albums[currentIndex];
      albums[currentIndex] = albums[randomIndex];
      albums[randomIndex] = temporaryValue
    }

    return albums;
  }

  handleClick = id => {
    const albums = this.state.albums;

    const picClicked = albums.filter(clicked => clicked.id === id);

    
  }

}

export default App;
