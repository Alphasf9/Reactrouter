import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// Outlet is used to render the header and footer components by dynamically chnaging the content ofheader and footer ,eg about us page,contact us page
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
