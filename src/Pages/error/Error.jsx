import React from 'react';
import image1 from'../../../public/App-Error.png'

const Error = () => {
    return (
        <div>
            

 <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      {/* Illustration Container */}
      <div className="max-w-md w-full mb-8">
        {/* Replace the src with your actual image path */}
        <img 
          src={image1}
          alt="404 Error - Page Not Found"
          className="w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Oops, page not found!
      </h1>
      
      <p className="text-slate-500 text-lg mb-8 max-w-sm">
        The page you are looking for is not available.
      </p>

      {/* Action Button */}
      <button 
        onClick={() => window.history.back()}
        className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-3 px-10 rounded transition-colors duration-200 shadow-md"
      >
        Go Back!
      </button>
    </div>


            

        </div>
    );
};

export default Error;