import React from 'react'
import Card from './Card'
import SectionHeader from './SectionHeader'
const Cards = () => {
  return (
    <div className="justify-items-center my-30 w-5/6 mx-auto">

          <SectionHeader 
          pill='Our Achievements'
          title='Our Awards and Recognitions'
          text="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
          />
        <div className="card-wrapper mt-12 grid md:grid-cols-3 gap-5">
          <Card 
          padding='p-0'
        icon="/assets/icons/pie.png"
        title="Outstanding Early Childhood Education Award"
        description="Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        />
          <Card 
          padding='p-0'
        icon="/assets/icons/bars.png"
        title="Innovative STEAM Education Award"
        description='Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
        />
          <Card 
          padding='p-3'
        icon="/assets/icons/light.png"
        title="Environmental Stewardship Award"
        description='Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.'
        />
        </div>
    </div>
  )
}

export default Cards
