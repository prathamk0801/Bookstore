import React from 'react'

function Cards({item}) {
  return (
   <>
    <div className='p-3 flex justify-center '>
      <div className="bg-white shadow-lg w-[270px] group hover:shadow-2xl scale-105 transition duration-300 rounded-lg cursor-pointer dark:bg-slate-800 dark:text-white">
<figure className="h-48 w-full overflow-hidden flex justify-center ml-1">
  <img
    src={item.Image}
    alt="book"
    className="h-full object-contain"
  />
</figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge bg-pink-500 text-white border-none rounded-full px-3 py-2 ">{item.Category}</div>
    </h2>
   {item.Title}
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Price: ${item.Price.toFixed(2)}</div>
      <div className="badge border-pink-500 text-pink-500 bg-transparent rounded-full px-3 py-1 hover:bg-pink-500 hover:text-white transition outline outline-1 outline-black ">Buy</div>
    </div>
  </div>
</div>
    </div>
   </>
  )
}

export default Cards
