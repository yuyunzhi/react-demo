import React from 'react';
import './App.css';
import * as ReactDOM from "react-dom";


let _state
function myUseState (initialValue){
    _state = _state === undefined ? initialValue :_state

    function setState (newState){
        _state = newState
        render()
    }
    return [_state,setState]
}

const render = ()=> ReactDOM.render(<App />,document.getElementById('root'))


function App(props) {
    const [n,setN] = myUseState(0)
    console.log('后',n);
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={()=>setN(n+1)}>+1</button>
            </p>
        </div>
    );
}

export default App;
