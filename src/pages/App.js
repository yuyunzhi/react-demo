import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Demo from '../components/demo.js'
import Clock from '../components/clock.js'
import Toggle from '../components/toggle'
import LoginControl from '../components/login'
import Example from '../components/example'
function App(props) {
    console.log(props);

    return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
