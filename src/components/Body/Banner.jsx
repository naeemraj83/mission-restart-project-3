import React from 'react';

const Banner = () => {
    const navyDark = '#001529'; 
    const purpleMain = '#8B5CF6';
    const greyText = '#6B7280'; 

    // Social Links Icon Backgrounds
    // const iconBgs = {
    //     cyan: 'bg-[#14B8A6]',
    //     blue: 'bg-[#1D4ED8]',
    //     green: 'bg-[#15803D]',
    //     red: 'bg-[#E11D48]',
    //     trello: 'bg-[#2563EB]',
    //     xor: 'bg-[#38BDF8]',
    // };
    return (
        <div>
            <section className="bg-white px-6 py-16 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                
                {/* --- Headline Section --- */}
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-[${navyDark}] tracking-tighter mb-5`}>
                    We Build
                    <br />
                    <span className={`text-[${purpleMain}]`}>Productive</span> Apps
                </h1>

                {/* --- Subtext Section --- */}
                <p className={`text-[15px] md:text-base text-[${greyText}] max-w-2xl font-normal leading-relaxed mb-10`}>
                    <span className={`font-semibold text-[${navyDark}]`}>At HERO.IO</span> , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                {/* --- App Store Buttons Section (Responsive) --- */}
                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <button className={`bg-[#E5E7EB]/50 border border-[#D1D5DB]/60 rounded-xl px-10 py-3.5 shadow-md flex items-center gap-3 hover:bg-[#D1D5DB] transition`}>
                        <i className="fa-brands fa-google-play text-2xl text-slate-800" />
                        <span className={`font-semibold text-[15px] text-[${navyDark}]`}>Google Play</span>
                    </button>
                    <button className={`bg-[#E5E7EB]/50 border border-[#D1D5DB]/60 rounded-xl px-10 py-3.5 shadow-md flex items-center gap-3 hover:bg-[#D1D5DB] transition`}>
                        <i className="fa-brands fa-app-store-ios text-3xl text-slate-800" />
                        <span className={`font-semibold text-[15px] text-[${navyDark}]`}>App Store</span>
                    </button>
                </div>

                {/* --- Social Icon / Features List (Responsive Grid) --- */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full max-w-5xl">
                    {[
                        { icon: 'fa-location-crosshairs', bg: iconBgs.cyan },
                        { icon: 'fa-check', bg: iconBgs.blue },
                        { icon: 'fa-power-off', bg: iconBgs.green },
                        { icon: 'fa-clock', bg: iconBgs.red },
                        { icon: 'fa-trello', bg: iconBgs.trello },
                        { icon: 'fa-xor', bg: iconBgs.xor },
                    ].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <div className={`w-20 h-20 md:w-24 md:h-24 ${item.bg} rounded-full flex items-center justify-center shadow-xl shadow-[${purpleMain}/20]`}>
                                <i className={`fa-solid ${item.icon} text-white text-3xl md:text-4xl`} />
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>

<section className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
                    Trusted By Millions, Built For You
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    
                    {/* Stat 1: Total Downloads */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-base font-medium opacity-80 mb-2 uppercase tracking-wide">
                            Total Downloads
                        </span>
                        <h3 className="text-5xl md:text-6xl font-black mb-3">29.6M</h3>
                        <p className="text-xs md:text-sm font-medium opacity-70">
                            21% More Than Last Month
                        </p>
                    </div>

                    {/* Stat 2: Total Reviews */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-base font-medium opacity-80 mb-2 uppercase tracking-wide">
                            Total Reviews
                        </span>
                        <h3 className="text-5xl md:text-6xl font-black mb-3">906K</h3>
                        <p className="text-xs md:text-sm font-medium opacity-70">
                            46% More Than Last Month
                        </p>
                    </div>

                    {/* Stat 3: Active Apps */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-base font-medium opacity-80 mb-2 uppercase tracking-wide">
                            Active Apps
                        </span>
                        <h3 className="text-5xl md:text-6xl font-black mb-3">132+</h3>
                        <p className="text-xs md:text-sm font-medium opacity-70">
                            31 More Will Launch
                        </p>
                    </div>

                </div>
            </div>
        </section>
        
        </div>
    );
};

export default Banner;