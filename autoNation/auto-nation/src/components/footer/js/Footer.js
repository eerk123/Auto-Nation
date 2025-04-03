import React from "react"
import { Link } from "react-router-dom"
import "../Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/svg/autonationLogo.svg" alt="Auto Nation Logo" />
            <h3>Auto Nation</h3>
          </div>
          <p className="footer-description">
            Монголын хамгийн том автомашины зарын сайт. Манай платформ дээр
            найдвартай худалдагчдын автомашины заруудыг хялбар хайж олох
            боломжтой.
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Холбоосууд</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Нүүр хуудас</Link>
            </li>
            <li>
              <Link to="/listings">Бүх зарууд</Link>
            </li>
            <li>
              <Link to="/sell">Зар нэмэх</Link>
            </li>
            <li>
              <Link to="/about">Бидний тухай</Link>
            </li>
            <li>
              <Link to="/contact">Холбоо барих</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Холбоо барих</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-phone"></i>
              <span>+976 99999999</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@autonation.mn</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Улаанбаатар хот, Сүхбаатар дүүрэг</span>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Даваа - Баасан: 09:00 - 18:00</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Мэдээлэл авах</h3>
          <p>Шинэ зарууд болон онцлох санал боломжуудыг мэдээлэл авах</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Имэйл хаягаа оруулна уу"
              required
            />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {currentYear} Auto Nation. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Нууцлалын бодлого</Link>
            <Link to="/terms">Үйлчилгээний нөхцөл</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
