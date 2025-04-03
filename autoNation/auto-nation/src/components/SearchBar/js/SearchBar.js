import React from "react"
import "../SearchBar.css"

const SearchBar = ({
  searchQuery,
  selectedBrand,
  selectedManufacturer,
  handleSearch,
  setSearchQuery,
  setSelectedBrand,
  setSelectedManufacturer,
}) => {
  return (
    <section className="searchBar">
      <div className="mainSearch">
        <div className="searchTitle">Автомашин хайх</div>
        <div className="searchsection">
          <form onSubmit={handleSearch}>
            <div className="search-fields">
              <input
                type="text"
                id="query"
                name="q"
                placeholder="Машины нэр..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                id="brand"
                name="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Брэнд сонгох</option>
                <option value="Toyota">Toyota</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Tesla">Tesla</option>
              </select>
              <select
                id="manufacturer"
                name="manufacturer"
                value={selectedManufacturer}
                onChange={(e) => setSelectedManufacturer(e.target.value)}
              >
                <option value="">Үйлдвэрлэгч сонгох</option>
                <option value="Japan">Япон</option>
                <option value="Germany">Герман</option>
                <option value="USA">АНУ</option>
                <option value="Korea">Солонгос</option>
              </select>
            </div>
            <button type="submit" className="search-btn">
              Хайх
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchBar
