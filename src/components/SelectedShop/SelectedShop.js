import "./SelectedShop.css";
import React from "react";

const SelectedShop = () => {
  return (
    <div className='selectedShop'>
     <header className='header'><h1>Cap Hill Coffee</h1></header>
    <img src={shop.img} alt={shop.name} className='shopImg' />
    <div className='shopDetailsContainer'>
      <div className='shopDetailsBoxLeft'>
        <div><strong>Address:</strong> {shop.address}</div>
        <div><strong>Phone number:</strong> {shop.phoneNumber}</div>
        <div><strong>Website:</strong> <a href={shop.website}>{shop.website}</a></div>
      </div>
      <div className='shopDetailsBoxRight'>
      <div><strong>Hours:</strong></div>
      <div><strong>Services:</strong></div>
      <ul>
        {shop.dineIn && <li>Dine In</li>}
        {shop.takeOut && <li>Take Out</li>}
        {shop.wheelchairAccessible && <li>Wheelchair Accessible</li>}
        {shop.foodProvided && <li>Food Provided</li>}
      </ul>
      </div>
    </div>
    <div className='rating'>Rating: {shop.rating}</div>
    <div className='ratingIcons'>
          <span role='img' aria-label='thumbs-up'>
            👍
          </span>
          <span role='img' aria-label='thumbs-down'>
            👎
          </span>
    </div>
        </div>
  
  );
};

export default SelectedShop;
