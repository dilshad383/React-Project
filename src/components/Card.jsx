import React from 'react'

const Card = ({padding, icon, title, description}) => {

  return (
    <div>
      <div className={`card border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white relative mt-12 ${padding}`} >
        <div className="card-icon absolute -top-3/12 max-md:-top-3/12 max-sm:-top-2/12 left-1/12">
            <img src={icon} alt="" />
        </div>
        <h2 className='mt-10 font-semibold text-2xl px-4'>{title}</h2>
        <p className='pb-6 pt-2 px-4 text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Card
