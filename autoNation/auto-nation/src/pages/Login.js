import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      // TODO: Implement actual login logic here
      console.log("Login attempt with:", { email, password })
      navigate("/") // Redirect to home after successful login
    } catch (err) {
      setError("Нэвтрэх нэр эсвэл нууц үг буруу байна")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Нэвтрэх</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">И-мэйл</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Нууц үг</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Нэвтрэх
          </button>
        </form>
        <div className="signup-link">
          Бүртгэлгүй юу? <Link to="/signup">Бүртгүүлэх</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
