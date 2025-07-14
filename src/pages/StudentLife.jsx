import Card from "../components/Card"
import EventsCard from "../components/EventsCard"
import Main from "../components/Main"
import SectionHeader from "../components/SectionHeader"

const StudentLife = () => {
  const card = [
    {
      padding: 'p-4',
      icon: '/assets/icons/light.png',
      title: 'Sports and Athletics',
      description: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."
    },
    {
      padding: 'p-5',
      icon: '/assets/icons/brush.png',
      title: 'Art and Creativity',
      description: 'Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.'
    },
    {
      padding: 'py-6',
      icon: '/assets/icons/music.png',
      title: 'Music and Performing Arts',
      description: 'Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.'
    },
    {
      padding: 'py-4',
      icon: '/assets/icons/puzzle.png',
      title: 'Language Clubs',
      description: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."
    },
    {
      padding: 'py-4',
      icon: '/assets/icons/beaker.png',
      title: 'Science Club',
      description: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning."
    },
    {
      padding: 'py-6',
      icon: '/assets/icons/spark.png',
      title: 'Cooking and Culinary Arts',
      description: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals."
    },

  ]
  return (
    <div className="bg-[#ffefef] py-12">
        <Main 
        pill='Enriching Student Life'
        title='Embracing Learning with Discovery and Joy'
        text="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
        />

        <div className="activities w-5/6 mx-auto">
            <SectionHeader 
            pill='Our Features'
            title='Extracurricular Activities'
            text='At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including'
            />

            <div className="card-wrapper mt-8 grid md:grid-cols-3 gap-x-8 gap-y-8">
              {
                card.map((activity, index) => {
                  return (
                    <Card 
                    key={index}
                    padding={activity.padding}
                    icon={activity.icon}
                    title={activity.title}
                    description={activity.description}
                    />
                  )
                  }
                )
              }
            </div>
        </div>

        <div className="events w-5/6 mx-auto">
          <SectionHeader 
          pill='Our Feauters'
          title='Events & Celebrations'
          text='At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include'
          />

          <div className="card-wrapper mt-12 grid md:grid-cols-3 gap-8">
            <EventsCard 
            img='/assets/images/sports-day.png'
            position='top-3/6 -translate-y-3/6'
            title='Annual Sports Day'
            text="A day filled with friendly competition, team spirit, and sportsmanship."
            />
            <EventsCard 
            img='/assets/images/cultural-festivals.png'
            position='bottom-0'
            title='Cultural Festivals'
            text="Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation."
            />
            <EventsCard 
            img='/assets/images/art-exhibitions.png'
            position='top-3/6 -translate-y-3/6'
            title='Art Exhibitions'
            text="Showcasing our students' artistic talents through exhibitions and displays."
            />
            <EventsCard 
            img='/assets/images/science-fair.png'
            position='top-3/6 -translate-y-3/6'
            title='Science Fair'
            text="A platform for budding scientists to present their innovative projects and experiments."
            />
            <EventsCard 
            img='/assets/images/international-day.png'
            position='bottom-0'
            title='Art Exhibitions'
            text="A vibrant celebration of our diverse community, embracing cultures from around the world."
            />
            <EventsCard 
            img='/assets/images/graduation-ceremony.png'
            position='top-3/6 -translate-y-3/6'
            title='Graduation Ceremony'
            text="A significant milestone as our Kindergarten students prepare to embark on their academic journey."
            />
          </div>
        </div>

        <div className="student-support w-5/6 mx-auto">
          <SectionHeader 
          pill='Our Achievements'
          title='Student Support'
          text="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
          />

          <div className="card-wrapper mt-8 grid md:grid-cols-3 gap-x-6">
            <Card 
            padding='py-2'
            icon='/assets/icons/bulb.png'
            title='Counseling'
            description="Professional counselors offer guidance and support to students, addressing their emotional and social well-being."
            />
            <Card 
            padding='py-2'
            icon='/assets/icons/book.png'
            title='Learning Support'
            description="Our educators provide additional assistance to students who may require extra support in their academic journey."
            />
            <Card 
            padding='py-1'
            icon='/assets/icons/group.png'
            title='Parent-Teacher Collaboration'
            description="We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
            />
          </div>
        </div>
    </div>
  )
}

export default StudentLife
