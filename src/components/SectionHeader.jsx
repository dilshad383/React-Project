import React from 'react'

const SectionHeader = ({ pill, title, text }) => {
  return (
    <div className="justify-items-center mt-20 text-center">
            <div className="pill border rounded-lg inline-block bg-white">{pill}</div>
            <h2 className="text-4xl my-2">{title}</h2>
            <p>{text}</p>
    </div>
  )
}

export default SectionHeader
