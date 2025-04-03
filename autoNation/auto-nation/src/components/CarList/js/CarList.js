import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../CarList.css"

export default function CarList({ cars, showCarModal }) {
  return (
    <div className="featured-cars-grid">
      {cars.map((car) => (
        <div
          key={car.name}
          className="featured-car-card"
          onClick={() => showCarModal(car)}
        >
          <div className="car-image-container">
            <div
              className="car-image"
              style={{ backgroundImage: `url(${car.image})` }}
            >
              <div className="image-overlay"></div>
              <div className="car-price-tag">
                <span className="price-currency">₮</span>
                <span className="price-amount">{car.price}</span>
              </div>
            </div>
          </div>
          <div className="car-details">
            <h3 className="car-name">{car.name}</h3>
            <div className="car-specs">
              {car.specs.map((spec, index) => (
                <div key={index} className="spec-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
            <div className="car-actions">
              <button className="view-details-btn">
                Дэлгэрэнгүй
                <i className="fas fa-arrow-right"></i>
              </button>
              <Link to={`/contact/${car.name}`} className="contact-seller-btn">
                <i className="fas fa-envelope"></i>
                Худалдагчтай холбогдох
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
