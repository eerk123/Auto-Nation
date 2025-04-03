import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Login.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Нууц үг таарахгүй байна")
      return
    }

    try {
      // TODO: Implement actual signup logic here
      console.log("Signup attempt with:", formData)
      navigate("/login") // Redirect to login after successful signup
    } catch (err) {
      setError("Бүртгүүлэхэд алдаа гарлаа")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Бүртгүүлэх</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Нэр</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">И-мэйл</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Нууц үг</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Нууц үг давтах</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Бүртгүүлэх
          </button>
        </form>
        <div className="signup-link">
          Бүртгэлтэй юу? <Link to="/login">Нэвтрэх</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
