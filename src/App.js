import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { increment,decrement} from './Redux/CounterSlice'


const App = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='App'>
   
    <button onClick={()=>dispatch(increment())}>+</button>
    <span>Count:{count}</span>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
