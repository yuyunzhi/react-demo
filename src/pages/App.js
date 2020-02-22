import React, {useMemo} from "react";

function App() {
    const [n, setN] = React.useState(0);
    const [m, setM] = React.useState(0);
    // const onClick = () => {
    //     setN(n + 1);
    // };

    const onClick = useMemo(()=>{
        return ()=>{
            setN(n + 1);
        }
    },[m])

    return (
        <div className="App">
            <div>
                <button onClick={onClick}>update n {n}</button>
            </div>
            {/*<Child data={m}/>*/}
             <Child2 data={m}/>
        </div>
    );
}

function Child(props) {
    console.log("child 执行了");
    console.log('假设这里有大量代码')
    return <div>child: {props.data}</div>;
}

const Child2 = React.memo(Child);


export default App
