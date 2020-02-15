import React from 'react';
import './App.css';
import * as ReactDOM from "react-dom";


/**
 * 总结
 * 每个函数组件对应一个React节点---FiberNode
 * 每个节点保存在state --- memorizedState 和index实现用的是链表
 * useState 会读取state[index]
 * index由useState出现的顺序决定
 * setState 会修改state，并触发render更新
 * 注意：不允许在if里写useState
 */

let _state = []
let index = 0
function myUseState (initialValue){
    let currentIndex  = index
    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue :_state[currentIndex]
    function setState (newState){
        _state[currentIndex] = newState
        render()
    }
    console.log('_state',_state)
    index++
    return [_state[currentIndex],setState]
}

const render = ()=> {
    index = 0 //每次走完重置为0
    ReactDOM.render(<App />,document.getElementById('root'))

}


function App(props) {
    const [n,setN] = myUseState(0)
    const [m,setM] = myUseState(0)
    console.log('后',n);
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={()=>setN(n+1)}>+1</button>
            </p>
            <p>{m}</p>
            <p>
                <button onClick={()=>setM(m+1)}>+1</button>
            </p>
        </div>
    );
}

export default App;
