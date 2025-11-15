import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="z-50 flex justify-between p-8 mt-4 tracking-wider">
      <h1 className='text-6xl font-bold font-mono '>TODO LIST</h1>
      <ul className='flex gap-10 font-semibold items-center mr-10 -translate-x-16 '>
        <NavLink to="/" className={({isActive})=>(
          `${isActive?"text-orange-500":"text-black"}`
        )}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>(`${isActive?"text-orange-500":"text-black"}`)}>About</NavLink>
        <NavLink to="/todo" className={({isActive})=>(`${isActive?"text-orange-500":"text-black"}`)}>Todo-List</NavLink>
      </ul>
      <a href='' target='blank' className="bg-black py-2 px-8 rounded-full text-white font-semibold font-serif flex items-center gap-5 cursor-pointer hover:bg-black/70"><FaGithub/>Github</a>
    </div>
  )
}

export default Navbar