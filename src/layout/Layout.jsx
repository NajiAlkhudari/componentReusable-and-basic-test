import React from 'react'
import Header from '../components/partials/Header'
import { Outlet } from "react-router-dom";
import Footer from '../components/partials/Footer'
const Layout = () => {
  return (
    <>
    <Header />
  {<Outlet />}
<Footer />
    
    </>
  )
}

export default Layout
