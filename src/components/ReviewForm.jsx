import React, {useState, useContext} from 'react'
import {ReviewContext} from '../ReviewContext'




const ReviewForm = () => {
 const { setSearchKey}=useContext(ReviewContext)
 const [show, setShow]= useState('');

 const handleSubmit = (e) => {
e.preventDefault();
setSearchKey(show);
setShow('')
 }

  return (
    <header className='form'>    
    <h1>nFlix</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Search" value={show} onChange={(e)=> setShow(e.target.value)} />
    <button>Search</button>
    </form>

    </header>
  )
}

export default ReviewForm