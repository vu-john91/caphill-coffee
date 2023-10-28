import './App.css';
import Error from '../Error/Error'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello from App</h1>
      <Routes>
        <Route path="/" element={<CardContainer/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
