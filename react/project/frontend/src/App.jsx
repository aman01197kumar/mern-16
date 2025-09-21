import React from 'react'
import Signup from './components/screens/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Home from './components/screens/Home'
import ProductDetails from './components/screens/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='/products' element={<Home />} />
        <Route path='/product-detail/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App