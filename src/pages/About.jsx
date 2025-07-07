import React from 'react'
import Main from '../components/Main'
import Cards from '../components/Cards'
import SectionHeader from '../components/SectionHeader'
import TimelineItem from '../components/TimelineItem'
import TeamCard from '../components/TeamCard'

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

        <div className="w-11/12 mx-auto">
            <SectionHeader 
            pill='Our Teachers With Experties'
            title='Our Team Members'
            text="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <TeamCard 
                image='/assets/images/sarah.png'
                profession="Qualification:Bachelor's Degree in Early Childhood Education"  
                name='Ms. Sarah Anderson'              
                description="Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
                />
                <TeamCard 
                image='/assets/images/david.png'
                profession="Qualification: Master's Degree in Elementary Education"
                name='Mr. David Roberts'
                description="With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
                />
                <TeamCard 
                image='/assets/images/emily.png'
                profession="Qualification: Diploma in Child Psychology"
                name="Ms. Emily Hernandez"
                description="Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
                />
                <TeamCard 
                image='/assets/images/michael.png'
                name="Mr. Michael Turner"
                profession="Qualification: Bachelor's Degree in Physical Education"
                description="Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
                />
                <TeamCard 
                image='/assets/images/jessica.png'
                name="Ms. Jessica Lee"
                profession="Qualification: Master's Degree in Special Education"
                description="Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
                />
                <TeamCard 
                image='/assets/images/william.png'
                name="Mr. William Parker"
                profession="Qualification: Bachelor's Degree in Fine Arts"
                description="Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
                />
            </div>
        </div>
    </div>
  )
}

export default About
