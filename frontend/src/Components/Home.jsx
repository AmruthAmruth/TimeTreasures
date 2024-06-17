import React from 'react'
import background from '../asstes/vedio.mp4'
import { TypeAnimation } from 'react-type-animation';



function Home() {
  return (
    <div>
    <div className="relative w-full h-screen overflow-hidden ">

    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src={background} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="relative z-10 flex text-center items-center justify-center h-full text-white font-bold font-xl">
    <TypeAnimation
      sequence={[
        
        "TIME TREASURES",
        2000, 
        'INSPIRED BY THE IMPOSSIBLE..!',
        2000,
        'Explore Our Best Selling Watches..!',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  </div>
  </div>
  )
}

export default Home
 