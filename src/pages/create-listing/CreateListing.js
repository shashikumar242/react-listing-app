import React from "react";
import "./createListing.css";

function CreateListing() {
  return (
    <div className="create-listing">
      <form className="create-listing-form">
        <div className="create-listing-form-group">
          <input
            autoFocus={true}
            type="text"
            placeholder="property title"
            className="create-listing-text"
          />{" "}
          {/* when you want to autofocus input when gng to that page  -- user autofocus true attribute */}
          <label htmlFor="listingImg" className="create-listing-img-upload">
            <i class="upload-icon fa-solid fa-upload"></i>
          </label>
          <input type="file" id="listingImg" style={{ display: "none" }} />
        </div>
        <div className="create-listing-form-group">
          <textarea
            className="create-listing-text create-listing-description"
            placeholder="property description"
          ></textarea>
        </div>
      </form>
      <button className="create-listing-button">Submit</button>
    </div>
  );
}

export default CreateListing;
