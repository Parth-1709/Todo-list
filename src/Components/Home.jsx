import React, { useState } from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineEmojiObjects } from "react-icons/md"
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
function Home() {
  const[loaded,setloaded] = useState(false);
  const handlespline =()=>{
    setloaded(true);
  }
  return (
    <>
    <div className={`${loaded?"hidden":""} h-[70vh] flex justify-center items-center gap-5`}>
      <div className='h-20 w-20 border-t-4 rounded-full border-t-orange-600 border-blue-600 border-b-4 animate-spin'></div>
      <h1 className='text-xl tracking-wider font-bold'>Loading...</h1>
    </div>
    <div className={`${loaded?"":"hidden"} flex justify-between`}>
      <div className='max-w-[50%] m-9'>
        <h1 className='text-6xl font-bold font-sans text-orange-500 tracking-wider'>Organize your day with ease.</h1>
        <h2 className='mt-5 ml-2 text-xl tracking-wider font-black'>Built for clarity, speed, and focus.</h2>
        <div className='mt-10 flex gap-10'>
          <Link to="/about"><button className='px-8 py-2 bg-orange-500 rounded-full text-2xl font-sans text-white gap-4 flex items-center cursor-pointer hover:bg-orange-600/90'><CiCircleInfo />More Info</button></Link>
          <Link to="/todo"><button className='px-8 py-2 bg-white rounded-full text-2xl font-sans text-orange-600 gap-4 flex items-center border-orange-600 border-2 hover:bg-zinc-100 cursor-pointer'><MdOutlineEmojiObjects />Try Yourself</button></Link>
        </div>
      </div>
      <div className='max-w-[50%]'>
        <Spline scene="https://prod.spline.design/f6reYESsWQPtUoS4/scene.splinecode" onLoad={handlespline} />
      </div>
    </div>
    </>
  )
}

export default Home