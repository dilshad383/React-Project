import React, { useState } from 'react'

const Accordion = ({title, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className={`p-2 border-2 rounded-lg ${accordionOpen ? 'bg-white' : 'bg-[#ffefef]'}`}>
      <button 
      onClick={() => setAccordionOpen(!accordionOpen)}
      className='flex justify-between w-full'>
        <span>{title}</span>
        {accordionOpen ? <span><img src="/assets/icons/minus.png" /></span> : <span><img src="/assets/icons/plus.png" /></span>}
      </button>
      <div className={`grid overflow-hidden transition-all  duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100 ' : 'grid-rows-[0fr] opacity-0 '}`}>
        <div className='overflow-hidden'>{answer}</div>
      </div>
    </div>
  )
}

export default Accordion