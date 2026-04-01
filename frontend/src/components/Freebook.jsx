import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function Freebook() {
const[book,setBook]= useState([]);
  useEffect(()=>{
    const getBook= async ()=>{
      try {
        const res= await axios.get("http://localhost:4001/book");
        const data =res.data.filter((data) => data.Category === "Free")
          console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[]); 

      var settings = {
    dots: true,
      arrows: false, 
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 console.log(book);
  return (
   <>
  <div className='max-w-[1130px] mx-auto md:px-10 px-3 -mt-3 md:-mt-7' >
     <div><h2 className='text-xl font-semibold break-words'>Free<span className='text-pink-500'> offered </span> Books</h2>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing. Alias eaque sit vero, dicta debitis optio architecto similique commodi quos perferendis.
     </p></div>
     
     <div className='w-full mt-6'> 
      <Slider {...settings}>
  {book.map((item) => (
    <Cards key={item.id} item={item} />
  ))}
</Slider>
      </div>
      </div>
   </>
  )
}

export default Freebook
