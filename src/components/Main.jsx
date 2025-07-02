
import React from 'react'

const Main = ({pill, title, text, info}) => {
  return (
    <div className='w-11/12 mx-auto border rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white'>
        <img className='w-40' src="/assets/icons/cubes.png" alt="" />
        <div className="w-5/6 mx-auto mb-26 wrapper grid sm:grid-cols-1 md:grid-cols-2 relative -top-5">
            <div className="col">
                <div className="border rounded-md py-2 px-4 inline-block">
                    {pill}
                </div>
                <h1 className="text-4xl my-4 font-semibold">{title}</h1>
            </div>
            <div className="col">
                <p>
                    {text}
                </p>
                <div className="info">
                    {info}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
