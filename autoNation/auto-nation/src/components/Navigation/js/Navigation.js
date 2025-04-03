import React from "react"
import { Link } from "react-router-dom"
import "../../Navigation/Navigation.css"

const Navigation = ({ isLoggedIn, handleLogin }) => {
  return (
    <nav>
      <Link to="/">
        <img
          className="logo"
          src="/svg/autonationLogo.svg"
          alt="AutoNation Logo"
        />
      </Link>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Нүүр</Link>
          </li>
          <li>
            <Link to="/listings">Бүх зарууд</Link>
          </li>
          <li>
            <Link to="/sell">Зар нэмэх</Link>
          </li>
          <li className="auth-buttons">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="login-btn">
                  Нэвтрэх
                </Link>
                <Link to="/signup" className="signup-btn">
                  Бүртгүүлэх
                </Link>
              </>
            ) : (
              <Link to="/profile" id="profileBtn">
                <i className="fas fa-user"></i>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
