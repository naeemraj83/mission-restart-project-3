import React from 'react';
const appDetails = {
  name: "SmPlan: ToDo List With Reminder",
  developedBy: "productive.io",
  icon: "fa-solid fa-clock-rotate-left", // Icon placeholder
  downloads: "8M",
  rating: 4.9,
  reviews: "54K",
  size: "291 MB",
  ratingsData: [
    { star: 5, count: 11000 },
    { star: 4, count: 6500 },
    { star: 3, count: 3000 },
    { star: 2, count: 2000 },
    { star: 1, count: 1200 },
  ],
  description: [
    "This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles...",
    "A unique feature of this app is the integration of task lists with timers...",
    "For people who struggle with procrastination, the app provides motivational streaks and achievements..."
  ]
};

const CardDetails = () => {
    const data = appDetails;
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-white space-y-10 font-sans text-slate-700">
      
      {/* --- Section 1: Top Header & Stats --- */}
      <div className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-8">
        {/* App Icon */}
        <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-[#004A7C] rounded-[2.5rem] flex items-center justify-center p-4">
           <i className={`${data.icon} text-6xl text-[#004A7C]`}></i>
        </div>

        {/* Info & Badges */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{data.name}</h1>
            <p className="text-gray-400 text-sm">Developed by <span className="text-purple-600">{data.developedBy}</span></p>
          </div>

          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center">
              <i className="fa-solid fa-download text-green-500 mb-1"></i>
              <p className="text-[10px] text-gray-400 uppercase font-bold">Downloads</p>
              <p className="text-xl font-bold text-slate-800">{data.downloads}</p>
            </div>
            <div className="text-center">
              <i className="fa-solid fa-star text-orange-400 mb-1"></i>
              <p className="text-[10px] text-gray-400 uppercase font-bold">Average Ratings</p>
              <p className="text-xl font-bold text-slate-800">{data.rating}</p>
            </div>
            <div className="text-center">
              <i className="fa-solid fa-comment-dots text-purple-500 mb-1"></i>
              <p className="text-[10px] text-gray-400 uppercase font-bold">Total Reviews</p>
              <p className="text-xl font-bold text-slate-800">{data.reviews}</p>
            </div>
          </div>

          <button className="bg-[#00D191] hover:bg-[#00B881] text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm">
            Install Now ({data.size})
          </button>
        </div>
      </div>

      {/* --- Section 2: Ratings Bars --- */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Ratings</h2>
        <div className="space-y-3">
          {data.ratingsData.map((item) => (
            <div key={item.star} className="flex items-center gap-4">
              <span className="text-xs text-gray-500 w-8">{item.star} star</span>
              <div className="flex-1 bg-gray-100 h-6 rounded-sm overflow-hidden">
                {/* Dynamic Width Calculation */}
                <div 
                  className="bg-orange-500 h-full transition-all duration-500" 
                  style={{ width: `${(item.count / 12000) * 100}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-gray-300 w-10 text-right">{item.count}</span>
            </div>
          ))}
          <div className="flex justify-between text-[10px] text-gray-300 pt-1 border-t border-dotted border-gray-200">
            <span>0</span><span>3000</span><span>6000</span><span>9000</span><span>12000</span>
          </div>
        </div>
      </div>

      {/* --- Section 3: Description --- */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Description</h2>
        <div className="space-y-6 text-gray-500 text-sm leading-relaxed">
          {data.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

    </div>
        </div>
    );
};

export default CardDetails;