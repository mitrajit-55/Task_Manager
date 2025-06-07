import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-800 text-white py-3'>
        <div className="logo">
            <span class="font-bold text-xl mx-9 my-2">TaskFlow</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
        </nav>
  )
}

export default Navbar
