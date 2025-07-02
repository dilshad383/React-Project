import React from 'react'
import '../App.css'

const ImgCard = ({img, title, description}) => {
  return (
    <div className='border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white p-4 relative text-center'>
      <div className="card-img">
        <div className="absolute -top-0.5 shape left-3/6 -translate-x-3/6 ">
            <img className='w-11/12' src="/assets/icons/Shape.png" alt="" />
        </div>
        <div className="relative top-2">
            <img className='mx-auto' src={img} alt="" />
        </div>
      </div>
        <h2 className='mt-18 font-semibold text-2xl px-4'>
        {title}
        </h2>
      <p className='pb-6 pt-2 px-4 text-sm'>
        {description}
      </p>
    </div>
  )
}

export default ImgCard
