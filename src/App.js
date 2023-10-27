import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sales from './Pages/Sales';
import Purchase from './Pages/Purchase';
import About from './Pages/About';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
