import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
  const handleLogout = () =>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('currentUser');
    navigate('/')
    toast.success('Logout successfully')
  }


  return (
    <div className='flex justify-between items-center w-full h-17.5 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mt-2 text-white px-10 z-10'>

      <div className=' p-4' >
        <h1  >My Web</h1>
      </div>
      <div className=''>
        <ul className='flex justify-evenly gap-4 '>
          <Link to='/work' >Work</Link>
          <Link>Contact</Link>
          {
            isLoggedIn ?( <button onClick={handleLogout}>Logout</button>) : (<Link to='/login'>Login</Link>)
              
         }
          

        </ul>
      </div>
    </div>
  )
}

export default Navbar