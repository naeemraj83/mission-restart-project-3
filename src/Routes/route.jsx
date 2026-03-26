import React, { Component } from 'react';

import {
  createBrowserRouter,
  
} from "react-router";

// import Root from '../Pages/root/Root';
import Error from '../Pages/error/Error';
import Home from '../Pages/home/Home';
import Root from '../Pages/root/Root';
import Apps from '../Pages/apps/Apps';
import Instalation from '../Pages/instalation/Instalation';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children:[  
        {
            path:"/",
            Component:Home,
        },
         {
            path:"/apps",
            Component:Apps,
        },
         {
            path:"/ins",
            Component:Instalation,
        },

    ]
  },
]);

export default router;