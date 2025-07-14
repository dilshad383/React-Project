import SectionHeader from "./SectionHeader"


const OurPages = () => {
  const cardData = [
    {
      title: 'Academics',
      description: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.',
    },
    {
      title: 'Student Life',
      description: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.',
    },
    {
      title: 'Admissions',
      description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    },
    {
      title: 'About Us',
      description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    }
  ]
  return (
    <>
      <div className="our-pages w-11/12 mx-auto mt-16">
      <SectionHeader 
      pill='Exprole More'
      title='Navigate through our Pages'
      text="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />

        <div className="card-wrapper grid mt-6 md:grid-cols-2 gap-8">
          {
            cardData.map((card, index) => {
              return <div key={index} className="card border rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white p-8  text-center">
                <div className="card-header text-center m-auto w-5/6 ">
                  <h3 className='text-2xl font-bold mt-4'>{card.title}</h3>
                  <img className='mt-4' src="/assets/images/card-divider.png" alt="" />
                </div>
                <p className='my-6'>{card.description}</p>
              <button className='mt-8'><img src="/assets/images/Button.png" alt="" /></button>
              </div>
            }
          )
          }         

        </div>
      </div>
    </>
  )
}

export default OurPages
