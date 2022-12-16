import React from "react";

export default function Search () {
    return(
   <div className="Search">
   <form className="mb-4">
        <button type="submit" className="button-location">
          <i className="fa-solid fa-location-dot"></i>
        </button>
        <input
          type="Search"
          className="pin"
          placeholder="Enter a City..."
          autofocus="off"
        />
        <button type="submit" className="button-search">
          <i className="fas fa-search"></i>
        </button>
      </form>
   </div>
    );
}
    