import React from "react"
import { Link } from "react-router-dom"
import LocationSelector from "../components/LocationSelector"
import SearchBar from "../components/SearchBar"
import CarList from "../components/CarList"
import CarModal from "../components/CarModal"

const Home = ({
  selectedLocation,
  handleLocationChange,
  searchQuery,
  selectedBrand,
  selectedManufacturer,
  handleSearch,
  setSearchQuery,
  setSelectedBrand,
  setSelectedManufacturer,
  cars,
  showCarModal,
  showModal,
  selectedCar,
  setShowModal,
}) => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Автомашины хамгийн том</h1>
          <h1>зарын нэгдсэн сайт</h1>
          <p>
            Яг одоо худалдаалагдаж буй шинэ, хуучин автомашины найдвартай
            мэдээллийг 21 аймаг, 9 дүүргээс хайх боломжтой.
          </p>
          <div className="location-search">
            <div className="location-label">Байршил сонгох:</div>
            <div className="location-selector-wrapper">
              <LocationSelector
                selectedLocation={selectedLocation}
                handleLocationChange={handleLocationChange}
              />
              <button className="search-button">Сонгох</button>
            </div>
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="search-container">
          <h2>Автомашин хайх</h2>
          <SearchBar
            searchQuery={searchQuery}
            selectedBrand={selectedBrand}
            selectedManufacturer={selectedManufacturer}
            handleSearch={handleSearch}
            setSearchQuery={setSearchQuery}
            setSelectedBrand={setSelectedBrand}
            setSelectedManufacturer={setSelectedManufacturer}
          />
        </div>
      </section>

      <section className="featured-cars">
        <div className="section-header">
          <h2>Онцлох зарууд</h2>
          <Link to="/FeaturedListings" className="view-all">
            Бүгдийг харах <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <CarList cars={cars} showCarModal={showCarModal} />
      </section>

      <section className="benefits">
        <div className="benefits-container">
          <div className="benefit-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Найдвартай</h3>
            <p>Бүх зар шалгагдсан, найдвартай мэдээлэл</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-search"></i>
            <h3>Хялбар хайлт</h3>
            <p>Хүссэн автомашинаа хялбархан олох</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-handshake"></i>
            <h3>Шуурхай худалдаа</h3>
            <p>Шуурхай, найдвартай худалдаа хийх</p>
          </div>
        </div>
      </section>

      <CarModal
        showModal={showModal}
        selectedCar={selectedCar}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default Home
