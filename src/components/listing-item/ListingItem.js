import React from "react";
import "./ListingItem.css";
import {Link} from 'react-router-dom';
function ListingItem(props) {
    const {owner,time,image,description,id}  = props.props;
  return (
     <Link to={`detail/${id}`}>  
    <div className="listing-item">
      <img className="listing-img" src={image} />
      <div className="listing-details">
        <div className="listing-categories">
          <span className="listing-category">Buy</span>
          <span className="listing-category">Sell</span>
        </div>
        <span className="listing-title">{owner}</span>  <hr></hr>
        <span className="listing-time">{time}</span>
      </div>
      <p className="listing-description"> {description}</p>
      
    </div>
    </Link>
  );
}

export default ListingItem;
