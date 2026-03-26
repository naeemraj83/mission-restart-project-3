import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';

import Footar from '../../components/Footar/Footar';

const root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            
           
            <Navbar />

            
            <main className="flex-grow">
                <Outlet />
            </main>

           
            <Footar />
            
        </div>
    );
};

export default root;