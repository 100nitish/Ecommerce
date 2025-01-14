import React, { useState } from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Product from './components/Product'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
import Footer from './components/Footer'





function App() {

  const [data, setData] = useState([...items])
  const [cart,setCart] = useState([])
  return (
    <div>
      <Router>
      <Navbar cart={cart} setData={setData}/>
      <Routes>
    <Route path="/" element={ <Product cart={cart} setCart={setCart} items={data} />} />
    <Route path="/product/:id" element={<ProductDetail/>}/>
    <Route path="/search/:term" element={<SearchItem/>}/>
    <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
