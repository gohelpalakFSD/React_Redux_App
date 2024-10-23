import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrementActions, incrementActions } from "./Redux/Actions/CounterActions";
import { Link } from "react-router-dom";

function App() {

  let count = useSelector((state)=>state.countRoot.counter);
  console.log(count);
  let dispatch = useDispatch()

  return (
    <>
      <div style={{textAlign:"center"}}>
        <Link to="/AddContact">Contact</Link>        
        <h1>Counter With redux</h1>
        <button onClick={()=>dispatch(decrementActions())}>-</button>
          {count}
        <button onClick={()=>dispatch(incrementActions())}>+</button>
      </div>
    </>
  )
}

export default App
