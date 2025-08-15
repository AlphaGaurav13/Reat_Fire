import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/HEADER/header.jsx';
import Footer from './components/FOOTER/footer.jsx';

import Home from './components/HOME/home.jsx';

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
   </>
  )
}

export default Layout