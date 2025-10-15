import React from 'react'
import Signup from './components/screens/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Home from './components/screens/Home'
import ProductDetails from './components/screens/ProductDetails'
import Cart from './components/screens/Cart'
import Products from './components/screens/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/product-details/:title' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App