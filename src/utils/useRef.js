import React, {useRef} from 'react';
import './App.css';

/**
 * 注意useRef 只有一个current，并且赋值后不会更新App
 * 所以<p>nRef.current</p>是不会变的，如果需要变化，制造一个update API
 *      const update = useState(null)[1]
 *      update(每次传一个不一样的值即可)
 */
function App(props) {
    const nRef = useRef(0)  // {current:0}
    return (
        <div className="App">
            <p>{nRef.current}</p>
            <p>
                <button onClick={()=>nRef.current + 1}>+1</button>
            </p>
        </div>
    );
}

export default App;
