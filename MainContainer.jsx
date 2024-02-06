import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-2'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 rounded-full p-2'>
          <p className='text-base text-orange-500 font-semibold'>Shiper</p>
          <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
            <img className='w-full h-full object-contain' src={Delivery} alt="" />
          </div>
        </div>
        <p className='text-[2rem] font-bold tracking-wide'>The Fastest Delivery in <span className='text-orange-500'>Food</span></p>
        <p className='text-base text-textColor'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis et nihil nam dolore culpa eius laborum illum dolor, nulla tenetur, temporibus hic aspernatur optio cum eaque quis ipsa! Repudiandae!</p>
        <button className='bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
      </div>
      <div className='w-full flex items-center justify-center relative'>
        <img
          src={HeroBg}
          className="ml-auto w-full h-420 lg:w-auto lg:h-650"
          alt="Homepage background"
        />
      </div>
    </div>
  )
}

export default MainContainer