import React from "react"
import "../LocationSelector.css"

const LocationSelector = ({ selectedLocation, handleLocationChange }) => {
  return (
    <div className="location-selector">
      <label htmlFor="country">Байршил сонгох:</label>
      <select
        id="country"
        value={selectedLocation}
        onChange={handleLocationChange}
      >
        <option value="ub">Улаанбаатар</option>
        <option value="ara">Архангай</option>
        <option value="bao">Баян-Өлгий</option>
        <option value="bah">Баянхонгор</option>
        <option value="bul">Булган</option>
        <option value="goa">Говь-Алтай</option>
        <option value="gos">Говьсүмбэр</option>
        <option value="dau">Дархан-уул</option>
        <option value="dor">Дорноговь</option>
        <option value="dod">Дорнод</option>
        <option value="dud">Дундговь</option>
        <option value="zav">Завхан</option>
        <option value="uvu">Өвөрхангай</option>
        <option value="umn">Өмнөговь</option>
        <option value="orh">Орхон</option>
        <option value="suh">Сүхбаатар</option>
        <option value="sel">Сэлэнгэ</option>
        <option value="tuv">Төв</option>
        <option value="uvs">Увс</option>
        <option value="hov">Ховд</option>
        <option value="hen">Хэнтий</option>
      </select>
      <button id="selectBtn">Сонгох</button>
      <p id="selectedCountry">{selectedLocation}</p>
    </div>
  )
}

export default LocationSelector
