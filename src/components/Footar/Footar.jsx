import React from 'react';


const Footar = () => {
    return (
        <div className='mt-10'>
    <footer className="bg-[#001529] text-white py-12  px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-10 border-b border-slate-700/60">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-4 mb-10 md:mb-0 cursor-pointer group">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:shadow-blue-900/50 transition-shadow">
              {/* Play button icon using direct Font Awesome fa-play */}
              <i className="fa-solid fa-play text-white text-2xl" />
            </div>
            <span className="font-extrabold text-2xl tracking-wide uppercase">Hero.io</span>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Social Links
            </span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-120">
                {/* Font Awesome icon for X (formerly Twitter) */}
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-120">
                {/* Font Awesome icon for LinkedIn */}
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-120">
                {/* Font Awesome icon for Facebook */}
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-10 text-center">
          <p className="text-[11px] md:text-xs text-slate-500 font-medium uppercase tracking-widest">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footar;