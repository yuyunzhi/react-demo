import React from 'react';
import './App.css';
import Demo from '../components/demo.js'
import Clock from '../components/clock.js'
import Toggle from '../components/toggle'
import LoginControl from '../components/login'
import Example from '../components/example'
import ChessBoard from '../components/chess-board'



function App(props) {
    console.log(props);

    return (
    <div className="App">
      <header >
          <ChessBoard />
      </header>
        <footer>
            <Example></Example>
            <LoginControl></LoginControl>
            <Toggle></Toggle>
            <Clock></Clock>
            <Demo age={props.age} name={props.name} family={"123"}></Demo>
        </footer>
    </div>
  );
}

export default App;
