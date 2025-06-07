import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row md:justify-between items-center bg-indigo-800 text-white py-3 px-6'>
      <div className="logo mb-2 md:mb-0">
        <span className="font-bold text-xl">TaskFlow</span>
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
