import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword'
import ResetPassword from './Screens/ResetPassword/ResetPassword'
import Home from './Screens/Home/home'
import CreateProduct from './Screens/CreateProduct/CreateProduct'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen'
import UpdateProduct from './Screens/UpdateProduct/UpdateProduct'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/> 
      <Route path="/login" element={<Login />}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/reset-password/:reset_token" element={<ResetPassword />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/product/new" element={<CreateProduct/>}/>
      <Route path="/product/:product_id" element={<ProductsScreen />}/>
      <Route path="/product/:product_id/edit" element={<UpdateProduct/>}/>
    </Routes>
    </>
  )
}

export default App
