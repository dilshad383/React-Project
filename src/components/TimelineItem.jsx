import React from 'react'

const TimelineItem = ({title, text, year}) => {
  return (
    <div>
      <div className="item md:flex md:gap-10">
                    <div className="col pr-6 my-4 pl-6 py-4 inline-block gap-5 border rounded-md relative bg-white">
                        <div className="absolute -left-13 top-10 ">
                            <img className='w-4/6' src="/assets/icons/timeline-shape.png" alt="" />
                        </div>
                        <img className='inline-block mr-6' src="/assets/icons/cube.png" alt="" />
                        <p className='inline text-4xl font-semibold'>{year}</p>
                    </div>
                    <div className="col">
                        <h2 className="font-semibold">{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
    </div>
  )
}

export default TimelineItem
