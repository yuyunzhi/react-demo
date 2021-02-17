import React, {useContext,useState} from 'react';
import './App.css';

const Context = React.createContext(null)

function App() {
    const [theme,setTheme] = useState('red')
    return (
        <Context.Provider value={{theme,setTheme,a:123}}>
            <div className={`App ${theme}`}>
                <p>{theme}</p>
                <div>
                    <ChildA></ChildA>
                </div>
                <div>
                    <ChildB></ChildB>
                </div>
            </div>
        </Context.Provider>
    );
}

function ChildA() {
    const arg = useContext(Context)
    console.log('arg',arg);
    const {setTheme} = arg
    return (
        <div>
            <button onClick={() => setTheme("red")}>red</button>
        </div>
    )
}

function ChildB() {
    const {setTheme} = useContext(xxx)
    return (
        <div>
            <button onClick={() => setTheme("blue")}>blue</button>
        </div>
    )
}

export default App
