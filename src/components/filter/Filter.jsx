import "./customFilter.scss";

function Filter() {
  return (
    <div className="customFilter">
      <h1>
        Search results for <b>Nairobi</b>
      </h1>
      <div className="customTopSection">
        <div className="customFormItem">
          <label htmlFor="city" className="customLabel">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            className="customInput"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="customBottomSection">
        <div className="customFormItem">
          <label htmlFor="type" className="customLabel">Type</label>
          <select name="type" id="type" className="customSelect">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="customFormItem">
          <label htmlFor="property" className="customLabel">Property</label>
          <select name="property" id="property" className="customSelect">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="customFormItem">
          <label htmlFor="minPrice" className="customLabel">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            className="customInput"
            placeholder="any"
          />
        </div>
        <div className="customFormItem">
          <label htmlFor="maxPrice" className="customLabel">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            className="customInput"
            placeholder="any"
          />
        </div>
        <div className="customFormItem">
          <label htmlFor="bedroom" className="customLabel">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            className="customInput"
            placeholder="any"
          />
        </div>
        <button className="customSearchButton">
          <img src="/search.png" alt="" className="customSearchIcon" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
