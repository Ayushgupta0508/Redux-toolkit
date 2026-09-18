import React from 'react'
import { useEffect } from 'react'
import {useSelector , useDispatch } from 'react-redux'
import { changeByValue, decrement, increment } from '../store/features/counter/counterSlice'
import { useState } from 'react'

const Counter = () => {

  const [value, setValue] = useState()
  
  const dispatch = useDispatch()
  const storeValue = useSelector(state => state.counter.value)


  
  const handleIncrement = ()=>{
    dispatch(increment())
  }
  
  const handleDecrement = ()=>{
    dispatch(decrement())
  }
  
  
  const changeValue = ()=>{
    dispatch(changeByValue(value))
  }

  return (
    <div>
      <h1>{storeValue}</h1>
      <button onClick={handleIncrement} className='mr-10'>Increment</button>
      <button onClick={handleDecrement} className='mr-10'>Decrement</button>
      <input type="number" onChange={(e)=>setValue(e.target.value)}  />
      <button onClick={changeValue}>Set Value</button>
    </div>
  )
}

export default Counter
