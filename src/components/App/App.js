import "./App.css";
import Error from "../Error/Error";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import SelectedShop from "../SelectedShop/SelectedShop";

function App() {
  const [selectedShop, setSelectedShop] = useState(null);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<CardContainer />} />
        <Route path='/SelectedShop/:id' element={<SelectedShop selectedShop={selectedShop} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
