import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Promo from './Components/Promo'
import Servies from './Components/Servies'
import Review from './Components/Review'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Product/>
    <Promo/>
    <Servies/>
    <Review/>
    </div>
  )
}

export default App