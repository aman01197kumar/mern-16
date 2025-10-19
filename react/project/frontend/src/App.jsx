import React from 'react'
import Signup from './components/screens/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/screens/Login'
import Home from './components/screens/Home'
import ProductDetails from './components/screens/ProductDetails'
import Cart from './components/screens/Cart'
import Products from './components/screens/Products'
import { ProtectedRouting } from './components/utilities/ProtectedRouting'

const App = () => {
   const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/product-details/:title' element={<ProductDetails />} />
        <Route element={<ProtectedRouting token = {token}/>}>
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App