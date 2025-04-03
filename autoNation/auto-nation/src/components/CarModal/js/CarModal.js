import React from "react"
import "../CarModal.css"

const CarModal = ({ showModal, selectedCar, setShowModal }) => {
  if (!showModal || !selectedCar) return null

  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <div className="modal-content">
        <span className="close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <div id="carModalContent">
          <h2>{selectedCar.name}</h2>
          <div
            className="car-image"
            style={{ backgroundImage: `url(${selectedCar.image})` }}
          ></div>
          <div className="specs">
            {selectedCar.specs.map((spec, index) => (
              <span key={index}>{spec}</span>
            ))}
          </div>
          <p>Seller Contact: {selectedCar.contact}</p>
          <button>Make Offer</button>
        </div>
      </div>
    </div>
  )
}

export default CarModal
