import React from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../../Navigation"
import Footer from "../../footer"
import "../Layout.css"

const Layout = ({ isLoggedIn, handleLogin }) => {
  return (
    <div className="layout">
      <Navigation isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
