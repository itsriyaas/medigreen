import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
      <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />
    </div>
     <h3 className='text-center'>Page Not Found !</h3>
      <div className='d-flex justify-content-center align-items-center'><Link to={"/"}><button className='btn btn-success mt-4 mb-4'><IoMdHome className='me-3'/>Back to homepage</button></Link></div>
    </>
  )
}

export default Error