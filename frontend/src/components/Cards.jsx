

import React from 'react'

function Cards({ item }) {

  const category = (item.Category || item.category || "").trim().toLowerCase();

  return (
    <div className='p-3 flex justify-center'>
      <div className="bg-white shadow-lg w-[270px] group hover:shadow-2xl scale-105 transition duration-300 rounded-lg cursor-pointer dark:bg-slate-800 dark:text-white relative">
        
        {/* ✅ FREE BADGE (TOP LEFT) */}
      {item.price === 0 ? (
  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
    Free
  </div>
) : (
  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
    Paid
  </div>
)}
        <figure className="h-48 w-full overflow-hidden flex justify-center ml-1 ">
          <img
            src={item.Image || item.image || "https://via.placeholder.com/150"}
            alt={item.Title || item.name}
            
            className="h-full object-contain"
          />
          
        </figure>

        <div className="card-body ">
          
          {/* ✅ ONLY TITLE */}
          <h2 className="card-title mt-8">
            {item.Title || item.name}
          </h2>

          <div className="card-actions justify-between flex flex-col gap-2">
            
            <p className="text-sm opacity-70">
              {item.Description || item.description || "No description available"}
            </p>
            
            <div className="flex justify-between items-center w-full">
              <div className="badge badge-outline">
                ₹{item.price ? item.price.toFixed(2) : "0.00"}
              </div>

              <div className="badge border-pink-500 text-pink-500 bg-transparent rounded-full px-3 py-1 hover:bg-pink-500 hover:text-white transition outline outline-1 outline-black">
                Buy
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cards