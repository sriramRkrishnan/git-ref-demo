import React , {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { searchMovies } from '../features/movieSlice'
import { useDispatch } from 'react-redux'

const Header = () => {

  const [val,setVal] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const searchHandler = (e) =>{
    e.preventDefault()
    dispatch(searchMovies(val))
    return  navigate('/')
    
  }

  return (
    <div className='main-div'>
      <Link className='link' to='/' onClick={()=>{return dispatch(searchMovies('avengers'))}}><h3>Movie Database</h3></Link>  
      <form type='submit' onSubmit={(e)=>{return searchHandler(e)}} >
        <input type="text" className='input' onChange={(e)=>{return setVal(e.target.value)}} value={val}placeholder='search movie' />
      </form>
    </div>
  )
}

export default Header