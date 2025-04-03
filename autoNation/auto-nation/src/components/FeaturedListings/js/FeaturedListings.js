import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../FeaturedListings.css"

const FeaturedListings = () => {
  const [featuredCars, setFeaturedCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        // TODO: Replace with actual API call
        const mockData = [
          {
            id: 1,
            title: "Toyota Land Cruiser 2023",
            price: "350,000,000 ₮",
            image: "/images/car1.jpg",
            location: "Улаанбаатар",
            mileage: "50,000 км",
            year: "2023",
            isNew: true,
            isFeatured: true,
          },
          {
            id: 2,
            title: "Mercedes-Benz G-Class 2022",
            price: "450,000,000 ₮",
            image: "/images/car2.jpg",
            location: "Улаанбаатар",
            mileage: "30,000 км",
            year: "2022",
            isNew: true,
            isFeatured: true,
          },
          {
            id: 3,
            title: "BMW X5 2021",
            price: "280,000,000 ₮",
            image: "/images/car3.jpg",
            location: "Улаанбаатар",
            mileage: "45,000 км",
            year: "2021",
            isNew: false,
            isFeatured: true,
          },
        ]
        setFeaturedCars(mockData)
        setLoading(false)
      } catch (err) {
        setError("Алдаа гарлаа. Дахин оролдоно уу.")
        setLoading(false)
      }
    }

    fetchFeaturedCars()
  }, [])

  if (loading) {
    return (
      <div className="featured-listings loading">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (error) {
    return <div className="featured-listings error">{error}</div>
  }

  return (
    <section className="featured-listings">
      <div className="section-header">
        <h2>Онцлох зарууд</h2>
        <p>Шинэ болон онцлох автомашинууд</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {featuredCars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="featured-card">
              <div className="card-image">
                <img src={car.image} alt={car.title} />
                {car.isNew && <span className="badge new">Шинэ</span>}
                <span className="badge featured">Онцлох</span>
              </div>
              <div className="card-content">
                <h3>{car.title}</h3>
                <div className="car-details">
                  <span>
                    <i className="fas fa-calendar"></i> {car.year}
                  </span>
                  <span>
                    <i className="fas fa-road"></i> {car.mileage}
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt"></i> {car.location}
                  </span>
                </div>
                <div className="card-footer">
                  <span className="price">{car.price}</span>
                  <Link to={`/car/${car.id}`} className="view-details">
                    Дэлгэрэнгүй
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FeaturedListings
