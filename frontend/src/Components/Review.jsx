import React from 'react'

const Review = () => {
  return (
    <div class='mb-10'>
        <div>
            <h1 class='font-extrabold text-4xl text-center '>What Our Customers Are <br />
 
 Saying About Us</h1>
 <p class=' mt-5 text-center'>view all reviews</p>
        </div>
    <div class='w-full flex justify-center'>
        
    <div class='w-[90%] p-5 overflow-x-auto flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6'>
       
        <div class='w-full sm:w-80 md:w-96 lg:w-1/3 shadow-xl p-5'>
            <div class='flex text-yellow-400 gap-2'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p class='mt-3'>Watch Name</p>
            <p class='font-bold mt-2'>User Name</p>
            <p class='mt-3'>We offer free express shipping worldwide. All packages are fully tracked and insured.</p>
        </div>

        <div class='w-full sm:w-80 md:w-96 lg:w-1/3 shadow-xl p-5'>
            <div class='flex text-yellow-400 gap-2'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p class='mt-3'>Watch Name</p>
            <p class='font-bold mt-2'>User Name</p>
            <p class='mt-3'>We offer free express shipping worldwide. All packages are fully tracked and insured.</p>
        </div>

        <div class='w-full sm:w-80 md:w-96 lg:w-1/3 shadow-xl p-5'>
            <div class='flex text-yellow-400 gap-2'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p class='mt-3'>Watch Name</p>
            <p class='font-bold mt-2'>User Name</p>
            <p class='mt-3'>We offer free express shipping worldwide. All packages are fully tracked and insured.</p>
        </div>
    </div>
</div>
</div>

  )
}

export default Review