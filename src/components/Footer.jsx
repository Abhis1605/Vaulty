import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between flex-row w-full bg-[#FFCC66] w-[calc[100%-80vh] px-20 py-4 items-center'>
        <div className='flex gap-2 items-center'>
        <p className='text-[#3E8E7E] text-shadow-xs text-shadow-[#3E8E7E] font-medium text-lg'>Created by Abhi Solanki with  </p>
        <img style={{width:20,height:20}} src="/icons/heart.png" alt="heart-png" className='drop-shadow-red-500 drop-shadow-xs' /> 
        <p className='text-[#3E8E7E] text-shadow-xs text-shadow-[#3E8E7E] font-medium text-lg'>&</p> 
        <img src="/icons/code.png" alt="code-png" style={{width:20, height:20}} className='drop-shadow-black drop-shadow-xs'/>
        </div>
        <p className='text-[#3E8E7E] text-shadow-xs text-shadow-[#3E8E7E] font-medium text-lg'>&copy; All Rights Reserved 2025</p>
    </div>
  )
}

export default Footer