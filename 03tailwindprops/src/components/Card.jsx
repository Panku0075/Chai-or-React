import React, { useCallback, useState } from 'react'



function Card({courseName }) { // we can inject variable directly here or we can also use props here

  return (
<div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.pexels.com/photos/18681384/pexels-photo-18681384/free-photo-of-gaming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{courseName}</h1>
    <p  className="mt-2 text-sm text-white" >
    Chai aur React, created by Hitesh sir, is one of the best series available on the internet. It helps us learn React from the basics to advanced projects.
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        
    let's learn together
        </button>
  </div>
</div>
  )
}

export default Card