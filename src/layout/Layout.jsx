import React from 'react'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

import { Outlet } from "react-router-dom";
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
