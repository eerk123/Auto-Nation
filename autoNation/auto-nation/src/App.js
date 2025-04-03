import "./components/Layout/Layout.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Sell from "./components/Sell"
import CarList from "./components/CarList"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const [cars] = useState([
    {
      name: "Tesla Model S Plaid",
      price: "129,999",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      specs: ["0-60mph: 1.99s", "396mi Range", "1,020hp"],
      contact: "sales@tesla.com",
    },
    {
      name: "Porsche 911 GT3",
      price: "179,999",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
      specs: ["4.0L Flat-6", "502hp", "6-speed Manual"],
      contact: "porsche@example.com",
    },
  ])

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Car display and modal state
  const [showModal, setShowModal] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)

  // Location and search state
  const [selectedLocation, setSelectedLocation] = useState("ub")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedManufacturer, setSelectedManufacturer] = useState("")

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", {
      searchQuery,
      selectedBrand,
      selectedManufacturer,
    })
  }

  const showCarModal = (car) => {
    setSelectedCar(car)
    setShowModal(true)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isLoggedIn={isLoggedIn} handleLogin={handleLogin} />}
      >
        <Route
          index
          element={
            <Home
              selectedLocation={selectedLocation}
              handleLocationChange={handleLocationChange}
              searchQuery={searchQuery}
              selectedBrand={selectedBrand}
              selectedManufacturer={selectedManufacturer}
              handleSearch={handleSearch}
              setSearchQuery={setSearchQuery}
              setSelectedBrand={setSelectedBrand}
              setSelectedManufacturer={setSelectedManufacturer}
              cars={cars}
              showCarModal={showCarModal}
              showModal={showModal}
              selectedCar={selectedCar}
              setShowModal={setShowModal}
            />
          }
        />
        <Route path="sell" element={<Sell />} />
        <Route
          path="listings"
          element={<CarList cars={cars} showCarModal={showCarModal} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="profile"
          element={
            <div className="profile-page">
              <h2>Хэрэглэгчийн мэдээлэл</h2>
              <p>Хэрэглэгчийн мэдээллийн хуудас бэлтгэгдэж байна...</p>
            </div>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
