import React from 'react';
import ListingItem from '../listing-item/ListingItem';
import "./Listing.css";
import { DataArray } from '../../data';


function Listing() {
  console.log('datataa',DataArray)
  return (
    <div className='listing-section'>

       {DataArray.map((item)=>{
          return  <ListingItem props={item}/>
          
       })}
        
     
      {/* <ListingItem/>
      <ListingItem/>
      <ListingItem/>
      <ListingItem/>
      <ListingItem/>
      <ListingItem/>
      */}
    </div>
  )
}

export default Listing