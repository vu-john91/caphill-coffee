import './CardContainer.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

const CardContainer = () => {

const [shops, setShops] = useState([])

const getShops = () => {
  return fetch(`http://localhost:3001/api/v1/pathData`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      console.log('hello', response.json)
      return response.json()
    })
}

useEffect(() => {
  getShops()
    .then(data => setShops(data))
    .catch(error => console.log(error.message))
}, [])

  //http://localhost:3001/api/v1/pathData
const shopCards = shops.map((shop) => {
  return (
    <Link to={`/${shop.id}`} key={shop.id}>
      <Card
        name={shop.name}
        img={shop.img}
        //rating prop (where are we calculating it)
      />
    </Link>
)
})
  return (
    <div className='card-container'>
      {shopCards}
    </div>
  )
}

export default CardContainer