import React, { useEffect, useState } from 'react';


const Card = () => {

 const [cards,allCards]=useState([]);
 useEffect(()=>{
    fetch("/json/Data.json")
    .then(res=>res.json())
    .then(data=>allCards(data))
 },[])


    return (
        
  <section className="bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001529] mb-4">Trending Apps</h2>
          <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
          <div className="w-10 h-1 bg-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* slice(0, 8) bebohar kore matro 8 ti data dekhano holo */}
          {cards.slice(0, 8).map((app) => (
            <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow group">
              
              <div className="bg-[#E5E7EB] w-full aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                 <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                 />
              </div>

              <h3 className="text-[15px] font-bold text-[#001529] mb-4 line-clamp-1">
                {app.title}
              </h3>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-bold">
                  <i className="fa-solid fa-download text-[10px]"></i>
                  {app.downloads >= 1000000 ? (app.downloads / 1000000).toFixed(1) + 'M' : app.downloads}
                </div>

                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-xs font-bold">
                  <i className="fa-solid fa-star text-[10px]"></i>
                  {app.ratingAvg}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-purple-200">
            Show All
          </button>
        </div>
      </div>
    </section>
    );
};

export default Card;