import "./App.css";
import Error from "../Error/Error";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import SelectedShop from "../SelectedShop/SelectedShop";
import sampleCoffeeShops from "../../MockData";
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  const [selectedShop, setSelectedShop] = useState(sampleCoffeeShops);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<CardContainer />} />
        <Route path='/SelectedShop/1' element={<SelectedShop selectedShop={selectedShop} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
