
const EventsCard = ({img, position, title, text}) => {
  return (
    <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] pt-6 pb-8  text-center bg-white">
      <div className="card-img relative">
        <div className={`absolute left-0 right-0 ${position}`}>
            <img className="w-full" src="/assets/icons/rectangle.png" />
        </div>
        <img className="relative mx-auto px-8" src={img} alt="" />
      </div>

      <h1 className="text-2xl mt-8 font-semibold">{title}</h1>
      <p className="mt-2 px-8">{text}</p>
    </div>
  )
}

export default EventsCard
