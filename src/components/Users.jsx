import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../store/features/user/userSlice';
import {useSelector} from 'react-redux'



const Users = () => {

  const {users , error} = useSelector(state => state.user)
  console.log(users, error)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return (
    <div>
      Users
    </div>
  )
}

export default Users
