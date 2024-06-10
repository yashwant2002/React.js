import { useState } from 'react'
import './App.css'
import { ExampleNavbarOne } from './components/navbar'
import { ProductThree } from './components/ProductDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { OrderTwo } from './components/cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <ExampleNavbarOne/>
        <Routes>
          <Route path='/' element={<ProductThree/>}></Route>
          <Route path='/cart' element={<OrderTwo/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
