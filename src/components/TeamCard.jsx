import React from 'react'

const TeamCard = ({image, profession, name, description}) => {
  return (
    <div className='border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] py-4 mx-4'>
      <div className="card-header flex items-center justify-between">
        <div className="flex items-center gap-4 ml-4">
            <img className='' src={image} alt="" />
            <span className='inline-block text-lg'>{name}</span>
        </div>
        <div className="mr-4">
            <img className='' src="/assets/icons/envelope.png" alt="" />
        </div>
      </div>
      <div className="card-body mt-4 mx-4 ">
        <p className='font-semibold my-2'>{profession}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TeamCard
