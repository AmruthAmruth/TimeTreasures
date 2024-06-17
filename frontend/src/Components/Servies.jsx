import React from 'react'

const Servies = () => {
  return (
    <div class='w-full flex justify-center mb-10 '>
    <div class='w-[90%] rounded-xl shadow-2xl border mt-10 mb-10 flex flex-col md:flex-row text-center p-10 space-y-6 md:space-y-0 md:space-x-6'>
        
        <div class="flex-1">
            <i class="fa-solid fa-truck text-3xl"></i>
            <h2 class='font-bold text-xl mt-4'>Order Today, Shipped Tomorrow</h2>
            <p class='mt-4'>We offer free express shipping worldwide. All packages are fully tracked and insured.</p>
        </div>

        <div class="flex-1">
        <i class="fa-solid fa-calendar text-3xl"></i>
            <h2 class='font-bold text-xl mt-4'>2-Year Warranty</h2>
            <p class='mt-4'>We stand by the durability and craftsmanship of our watches with a 2-year warranty.</p>
        </div>
        
        <div class="flex-1">
        <i class="fa-solid fa-rotate-left text-3xl"></i>
            <h2 class='font-bold text-xl mt-4'>30-Day Return Policy</h2>
            <p class='mt-4'>We offer a 30-day return or exchange policy if you are not satisfied with your order for any reason.</p>
        </div>


         <div class="flex-1">
         <i class="fa-solid fa-headset text-3xl"></i>
            <h2 class='font-bold text-xl mt-4'>24/7 Customer Support</h2>
            <p class='mt-4'>Whatever your need, our dedicated customer service team are always here to help.</p>
        </div>
        
    </div>
</div>

  )
}

export default Servies