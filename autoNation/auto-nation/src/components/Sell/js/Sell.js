import React, { useState, useRef } from "react"
import "../Sell.css"

const Sell = () => {
  const [carData, setCarData] = useState({
    carModel: "",
    modelYear: "",
    importYear: "",
    mileage: "",
    price: "",
    description: "",
    sellerEmail: "",
    sellerPhone: "",
    images: [],
    specifications: [],
  })

  const [specifications, setSpecifications] = useState([{ key: "", value: "" }])
  const fileInputRef = useRef(null)
  const [previewImages, setPreviewImages] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCarData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSpecChange = (index, field, value) => {
    const newSpecs = [...specifications]
    newSpecs[index][field] = value
    setSpecifications(newSpecs)
  }

  const addSpecification = () => {
    setSpecifications([...specifications, { key: "", value: "" }])
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map((file) => URL.createObjectURL(file))
    setPreviewImages([...previewImages, ...newImages])
    setCarData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }))
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.currentTarget.classList.add("dragover")
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove("dragover")
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove("dragover")
    const files = Array.from(e.dataTransfer.files)
    const newImages = files.map((file) => URL.createObjectURL(file))
    setPreviewImages([...previewImages, ...newImages])
    setCarData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const finalSpecs = specifications
      .filter((spec) => spec.key && spec.value)
      .reduce((acc, spec) => ({ ...acc, [spec.key]: spec.value }), {})

    const submissionData = {
      ...carData,
      specifications: finalSpecs,
    }

    console.log("Submitting car data:", submissionData)
  }

  return (
    <div className="sell-container">
      <div className="form-header">
        <h1>Машинаа Хурдан Зар</h1>
        <p>Машины мэдээллээ доор оруул</p>
      </div>

      <form id="sellForm" className="advanced-form" onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="form-col">
            <div className="image-upload">
              <div
                className="drop-zone"
                id="dropZone"
                onClick={() => fileInputRef.current.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <i className="fas fa-cloud-upload-alt"></i>
                <p>Зурагаа Энд Авчирч Тавь</p>
                <span>эсвэл</span>
                <button type="button" className="browse-btn">
                  Файлаас Сонгох
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  id="carImages"
                  multiple
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </div>
              <div className="image-preview" id="imagePreview">
                {previewImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Preview ${index + 1}`}
                    className="preview-image"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="form-col">
            <div className="form-group">
              <label htmlFor="carModel">Машины загвар</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={carData.carModel}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modelYear">Үйлдвэрлэгдсэн Он</label>
                <input
                  type="number"
                  id="modelYear"
                  name="modelYear"
                  min="1900"
                  max="2024"
                  value={carData.modelYear}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="importYear">Орж Ирсэн Он</label>
                <input
                  type="number"
                  id="importYear"
                  name="importYear"
                  min="1900"
                  max="2024"
                  value={carData.importYear}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mileage">Явсан Миль (km)</label>
                <input
                  type="number"
                  id="mileage"
                  name="mileage"
                  value={carData.mileage}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Үнэ (₮)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={carData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="specs-editor">
              <h4>Машины Үзүүлэлт</h4>
              <div className="specs-list" id="specsList">
                {specifications.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <input
                      type="text"
                      placeholder="Үзүүлэлт"
                      value={spec.key}
                      onChange={(e) =>
                        handleSpecChange(index, "key", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Утга"
                      value={spec.value}
                      onChange={(e) =>
                        handleSpecChange(index, "value", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="add-spec-btn"
                onClick={addSpecification}
              >
                <i className="fas fa-plus"></i> Үзүүлэлт Нэмэх
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Нэмэлт Мэдээлэл</label>
          <textarea
            id="description"
            name="description"
            value={carData.description}
            onChange={handleInputChange}
            rows="4"
          />
        </div>

        <div className="seller-info">
          <h4>Холбогдох Мэдээлэл</h4>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sellerEmail">Email</label>
              <input
                type="email"
                id="sellerEmail"
                name="sellerEmail"
                value={carData.sellerEmail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellerPhone">Утас</label>
              <input
                type="tel"
                id="sellerPhone"
                name="sellerPhone"
                value={carData.sellerPhone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="publish-btn">
            <i className="fas fa-rocket"></i> ЗАР НИЙТЛЭХ
          </button>
        </div>
      </form>
    </div>
  )
}

export default Sell
