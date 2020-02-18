import React, {useEffect, useState} from 'react';
import './App.css';

/**
 * 每次render后都会运行useEffect
 *
 * 用途：
 * componentDidMount使用，[]作第二个参数
 * componentDidUpdate使用，可指定依赖
 * componentWillUnmount使用,通过return
 * 以上三种用途同时存在
 *
 * 多个useEffect按照顺序依次执行
 */

function App() {

    const [n,setN] = useState(0)
    const onClick = ()=>{
        setN(i=>i+1)
    }
    useEffect(()=>{
        console.log("只在第一次渲染后执行这句话")
    },[])

    useEffect(()=>{
        console.log("任何一个状态变化，第一、二、三……次渲染后执行这句话")
    })

    useEffect(()=>{
        console.log("第一次，及n变化了才执行这句话")
    },[n])

    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log("hi")

        },1000)
        return ()=>{
            console.log('当页面离开的时候执行这段代码');
            clearInterval(timer)
            timer = null
        }
    },[])
    return (
        <div>
            n:{n}
            <button onClick={onClick}>+1</button>
        </div>
    );
}

export default App
