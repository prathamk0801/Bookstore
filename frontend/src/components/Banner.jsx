import React from 'react'
import banner from '../assets/banner.png'
import { useState } from 'react'
function Banner() {
  const[value, setValue]= useState("")

  const handlesent = ()=>{
    console.log(value)
    setValue("");
  }
  return (
    <div className="w-full my-10 bg-white dark:bg-slate-900">

      <div className="max-w-6xl mx-auto px-4 bg-white dark:bg-slate-900">

        <div className="flex flex-col md:flex-row items-center gap-8">

          <div className="w-full order-2 md:order-1 md:w-1/2 mt-8 ">
            <h1><span className='text-pink-500'>Hello,</span> welcome here to learn something new <span className="text-pink-500">everyday!!!</span></h1>
           <p>Books are a powerful source of knowledge, imagination, and inspiration. They allow us to explore new ideas, cultures, and experiences without leaving our place. Through books, we can learn valuable lessons, improve our vocabulary, and develop critical thinking skills. Whether it is fiction that sparks creativity or non-fiction that builds understanding, books play an important role in personal growth.</p>
           <div className="relative w-full max-w-sm">
  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
    📧
  </span>
  <input
    type="email"
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    placeholder="Enter your email"
    className="w-79 rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>
<button onClick={handlesent} className="bg-pink-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-300 mt-3 cursor-pointer">
  Send
</button>
          </div>

    <div className="order-1 w-full md:w-1/2">
  <img 
    src={banner} 
    alt="banner" 
    className="w-full max-w-lg object-contain mx-auto"
  />
</div>

        </div>

      </div>

    </div>
  )
}

export default Banner