import React, {useEffect, useRef, useState} from 'react';
import './App.css';

/**
 * 注意useRef 只有一个current，并且赋值后不会更新App
 * 所以<p>nRef.current</p>是不会变的，如果需要变化，制造一个update API
 *      const update = useState(null)[1]
 *      update(每次传一个不一样的值即可)
 *
 *  当页面有useState执行了，就会渲染更新useRef的值
 */
function App(props) {
    const nRef = useRef(0)  // {current:0}
    const  [n,setN] = useState(0)
    useEffect(()=>{
        console.log('nRef:',nRef);
    })
    useEffect(()=>{
        console.log('n:',n);
    })
    return (
        <div className="App">
            <p>{nRef.current}</p>
            <p>
                <button onClick={()=>nRef.current=nRef.current + 1}>+1</button>
            </p>
            <p>{n}</p>
            <p>
                <button onClick={()=>setN(n+1)}>+1</button>
            </p>
        </div>
    );
}

export default App;

