import React from 'react'
import image from '../asstes/promo.avif'
const Promo = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} class="mt-10 w-full h-[500px] bg-[100%] bg-no-repeat mb-9">
    <div class="flex justify-center items-center h-full text-white">
      <div class='text-center'>

      <p class='text-xl'>DEFY SKYLINE CHRONOGRAPH</p>
      <h1 class='text-4xl font-bold'>LIVE LIFE AT A HIGHER FREQUENCY</h1>
      </div>
    </div>
  </div>
  )
}

export default Promo