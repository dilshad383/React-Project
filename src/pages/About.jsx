import React from 'react'
import Main from '../components/Main'
import Cards from '../components/Cards'
import SectionHeader from '../components/SectionHeader'
import TimelineItem from '../components/TimelineItem'

function About() {
  return (
    <div className='bg-[#ffefef] py-12'>
        <Main 
        pill='Overview'
        title='Welcome to Little Learners Academy'
        text='A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.'
        />
        
        <div className="justify-items-center my-30">
            <SectionHeader 
            pill='Mission & Visions'
            title='Our Mission & Visions'
            text='We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'
            />

            <div className="card-wrapper grid md:grid-cols-2 w-5/6 gap-10 my-10">
                <div className="card border rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white p-4">

                    <div className="card-header flex items-center mb-4">
                        <h1 className="font-semibold text-2xl">Mission</h1>
                        <div className="icon ml-auto "><img className='w-5/6' src="/assets/icons/Icon-1.png" alt="" /></div>

                    </div>
                    <div className="card-text">
                        At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.
                    </div>
                </div>
                <div className="card border rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white p-4">
                    <div className="card-header flex items-center mb-4">
                        <h1 className="font-semibold text-2xl">Mission</h1>
                        <div className="icon ml-auto "><img className='w-5/6' src="/assets/icons/icon-2.png" alt="" /></div>
                    </div>
                    <div className="card-text">
                        Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.
                    </div>
                </div>
            </div>
        </div>
        
        <Cards />

        <div className="timeline w-5/6
        mx-auto ">   
            <SectionHeader 
            pill='Our Progressive Journey'
            title='Our History'
            text="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />

            <div className="timeline-wrapper mt-8 grid gap-6 relative">
                <div className="connecter-line w-1.5 bg-black border-3 border-[#FFBE99] h-192 md:h-145 top-15 -left-12 absolute"></div>
                <TimelineItem 
                year='2023'
                title='Resilience and Future Horizons'
                text="Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
                />
                <TimelineItem 
                year='2017'
                title='Innovation and Technology'
                text="Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
                />
                <TimelineItem 
                year='2012'
                title='Expansion and Recognition'
                text="These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
                />
                <TimelineItem 
                year='2005'
                title='Inception and Growth'
                text="Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
                />
            </div>
        </div>
    </div>
  )
}

export default About
