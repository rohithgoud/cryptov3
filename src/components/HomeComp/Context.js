import React from 'react'
import Trending from '../Trending'
const Context = () => {
  return (
   <div className='flex flex-col w-[100%] md:mb-8 mb-3'>

<div>
<Trending/>
    </div>
    <div className='bg-emerald-500 w-[100%] text-center text-white md:py-8 py-6'>
      <h2 className='text-3xl md:text-5xl'>What is CoinX?</h2>
<p className='mt-2 text-xl md:text-2xl'>One place to look out for all the cryptocurrency information with no unnecessary things! </p>
    </div>
    
   </div>
  )
}

export default Context
