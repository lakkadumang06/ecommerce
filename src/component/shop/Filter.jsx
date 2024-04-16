import React from 'react'

export default function Filter() {
  return (
    <div className="toolbox">
    <div className="toolbox-left">
      <a href="#" className="sidebar-toggler">
        <i className="icon-bars" />
        Filters
      </a>
    </div>
    {/* End .toolbox-left */}
    <div className="toolbox-center">
      <div className="toolbox-info">
        Showing <span>12 of 56</span> Products
      </div>
      {/* End .toolbox-info */}
    </div>
    {/* End .toolbox-center */}
    <div className="toolbox-right">
      <div className="toolbox-sort">
        <label htmlFor="sortby">Sort by:</label>
        <div className="select-custom">
          <select name="sortby" id="sortby" className="form-control">
            <option value="popularity" selected="selected">
              Most Popular
            </option>
            <option value="rating">Most Rated</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      {/* End .toolbox-sort */}
    </div>
    {/* End .toolbox-right */}
  </div>
  )
}
