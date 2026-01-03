import React from 'react'
import { Button } from '../common/Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div  className='flex justify-center items-center sticky top-0 z-50'>
        <div className='flex justify-center items-center gap-10 bg-gray-600/10 px-7 py-4 rounded-2xl'>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/abouts"><Button>Abouts</Button></Link>
          <Link to="/contacts"><Button>Contacts</Button></Link>
        </div>
    </div>
  )
}

export default NavBar