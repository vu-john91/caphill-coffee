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
      </div>

    </div>
     
        <div className='shopImage'></div>
        <div className='shopDetailsContainer'>
          <div className='shopDetailsBox'></div>
          <div className='shopDetailsBox'></div>
        </div>
        <div className='rating'>average rating: </div>
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
