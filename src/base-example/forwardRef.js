import React, {forwardRef, useRef} from "react";


/**
 * forwardRef 就是给组件多加了一个参数可以接收父组件传递进来的ref
 * 函数组件如果子组件需要接受ref需要使用forwardRef
 * 类组件的子组件可以直接接收ref
 */

function App() {
    const buttonRef = useRef(null)
    console.log('buttonRef',buttonRef);
    return (
        <div className="App">
            <Button3 ref={buttonRef} >按钮</Button3>
        </div>
    )
}

const Button3 = forwardRef((props,ref)=>{
    console.log("ref",ref);
    return (
        <button className="red" ref={ref} {...props}/>
    )
})
export default App
