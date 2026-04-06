
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'
import { useState, useEffect } from 'react';

function Freebook() {
  const [book, setBook] = useState([]);

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://bookstore-9tth.onrender.com/book");
      console.log("All books from backend:", res.data);
      
     const freeBooks = res.data.filter(item => {
  // check field name dynamically
  const category = item.Category || item.category || ""; 
  return category.trim().toLowerCase() === "free";
});
      
      console.log("Filtered Free books:", freeBooks);
      setBook(freeBooks);
    } catch (err) {
      console.log("Error fetching books:", err);
    }
  };
  fetchBooks();
}, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className='max-w-[1130px] mx-auto md:px-10 px-3'>
      <h2 className='text-xl font-semibold'>
        Free <span className='text-pink-500'>offered</span> Books
      </h2>

      <div className='w-full mt-6'>
        <Slider {...settings}>
          {book.map((item) => (
            // ✅ FIXED KEY
            <Cards key={item._id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;