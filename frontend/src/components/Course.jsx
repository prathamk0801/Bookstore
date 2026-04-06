import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        // ✅ FIXED API
        const res = await axios.get("https://bookstore-9tth.onrender.com/book");

        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="pt-24">
      <div className='text-center max-w-3xl mx-auto px-3'>
        <h1 className='text-2xl md:text-4xl'>
          <span className='text-pink-500'>We'</span>re delighted to have you <span className='text-pink-500'>Here!</span>
        </h1>

        <p>Books are a great source of knowledge and inspiration...</p>

        <Link to='/'>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>
            Back
          </button>
        </Link>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-3'>
        {book.map((item) => (
          // ✅ FIXED KEY
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Course