import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../slice";

const Counter = () => {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return(

        <div>
            <p>Count is {count.value}</p>
            <button onClick={()=>{dispatch(incrementCount())}}>Increment</button>
            <button onClick={()=>{dispatch(decrementCount())}}>Decrement</button>
            <button onClick={()=>{dispatch(resetCount())}}>Reset</button>
        </div>

    )

}

export default Counter