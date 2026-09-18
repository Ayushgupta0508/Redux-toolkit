import './App.css'
import Counter from './components/Counter'
import {useDispatch} from 'react-redux'
import { changeName } from './store/features/counter/counterSlice'
import Users from './components/Users'



function App() {

  const dispatch = useDispatch()
  
  return (
    <>

    <input type="text" onChange={(e)=>dispatch(changeName(e.target.value))} />
      <Counter/>
      <Users/>
    </>
  )
}

export default App
