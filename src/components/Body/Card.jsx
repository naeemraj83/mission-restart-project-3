import React from 'react';

const Card = () => {

const appsData = [
    { id: 1, title: "Forest: Focus For Productivity", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 2, title: "SmPlan: ToDo List With Reminder", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 3, title: "FLIP - Focus Timer For Study", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 4, title: "Pomocat - Cute Pomodoro Timer", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 5, title: "Time Planner: Schedule & Tasks", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 6, title: "Morning Habits - Daily Routine", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 7, title: "Focus Plant: Pomodoro Forest", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
    { id: 8, title: "Alarmy - Alarm Clock & Sleep", downloads: "9M", rating: 5, image: "https://via.placeholder.com/300x300" },
  ];

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
          {appsData.map((app) => (
            <div key={app.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
              {/* Image Placeholder Area */}
              <div className="bg-[#E5E7EB] w-full aspect-square rounded-lg mb-4 flex items-center justify-center">
                 {/* <img src={app.image} alt={app.title} className="w-full h-full object-cover" /> */}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[#001529] mb-4 line-clamp-1">
                {app.title}
              </h3>

              {/* Stats: Downloads & Rating */}
              <div className="flex justify-between items-center">
                {/* Download Badge */}
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-bold">
                  <i className="fa-solid fa-download text-[10px]"></i>
                  {app.downloads}
                </div>

                {/* Star Badge */}
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded text-xs font-bold">
                  <i className="fa-solid fa-star text-[10px]"></i>
                  {app.rating}
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