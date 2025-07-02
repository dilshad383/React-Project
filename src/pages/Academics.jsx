import Card from '../components/Card'
import Gallery from '../components/Gallery'
import ImgCard from '../components/ImgCard'
import Main from '../components/Main'
import SectionHeader from '../components/SectionHeader'

function Academics() {
  return (
    <div className='bg-[#ffefef] py-12'>
      <Main 
      pill='Academics'
      title='Nurturing Young Minds for Success'
      text="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      
      <div className="special-features w-5/6 mx-auto">
        <SectionHeader 
        pill='Our Features'
        title='Our Special Features'
        text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />

        <div className="card-wrapper grid md:grid-cols-3 gap-6 mt-8">
            <Card 
            icon='/assets/icons/book.png'
            title='Thematic Learning'
            description="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
            />
            <Card 
            icon='/assets/icons/bars.png'
            title='STEAM Education'
            description="We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
            />
            <Card 
            icon='/assets/icons/puzzle.png'
            title='Language Immersion'
            description="Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
            />
            <Card 
            icon='/assets/icons/brush.png'
            title='Art and Creativity'
            description="Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
            />
            <Card 
            icon='/assets/icons/sun.png'
            title='Outdoor Education'
            description="Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
            />
            <Card 
            icon='/assets/icons/star.png'
            title='Play-Based Learning'
            description="Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
            />
        </div>
      </div>

      <div className="learning-outcome w-5/6 mx-auto">
        <SectionHeader 
        pill='Our Features'
        title='What Students Learn'
        text="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        />
        
        <div className="card-wrapper grid md:grid-cols-3 gap-8 mt-12">
          <ImgCard 
          img='/assets/images/language.png'
          title='Language Arts'
          description="Reading, writing, storytelling, and communication skills."
          />
          <ImgCard 
          img='/assets/images/mathematics.png'
          title='Mathematics'
          description="Number sense, basic operations, problem-solving, and logic."
          />
          <ImgCard 
          img='/assets/images/science.png'
          title='Science'
          description="Exploring the natural world through hands-on experiments and investigations."
          />
          
          <ImgCard 
          img='/assets/images/social-studies.png'
          title='Social Studies'
          description="Cultivating an understanding of diverse cultures and communities."
          />

          <ImgCard 
          img='/assets/images/arts-and-crafts.png'
          title='Arts and Crafts'
          description="Encouraging creativity through various art forms and crafts."
          />
          <ImgCard 
          img='/assets/images/physical-education.png'
          title='Physical Education'
          description="Promoting physical fitness, coordination, and teamwork."
          />


        </div>
      </div>

      <div className=" w-5/6 mx-auto ">
        <SectionHeader 
        pill='Our Gallery'
        title='Our Rooms Gallery'
        text="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        />
        <div className="gallery">
          <Gallery 
          img1={<img src="/assets/images/classroom-1.png" alt="" />}
          img2={<img src="/assets/images/classroom-2.png" alt="" />}
          img3={<img src="/assets/images/classroom-3.png" alt="" />}
          img4={<img src="/assets/images/classroom-4.png" alt="" />}
          title='Classrooms'
          text="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
          />
          <Gallery 
          img1={<img src="/assets/images/library-1.png" alt="" />}
          img2={<img src="/assets/images/library-2.png" alt="" />}
          img3={<img src="/assets/images/library-3.png" alt="" />}
          img4={<img src="/assets/images/library-4.png" alt="" />}
          title='Library'
          text="Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
          />
          <Gallery 
          img1={<img src="/assets/images/scienceLab-1.png" alt="" />}
          img2={<img src="/assets/images/scienceLab-2.png" alt="" />}
          img3={<img src="/assets/images/scienceLab-3.png" alt="" />}
          img4={<img src="/assets/images/scienceLab-4.png" alt="" />}
          title='Science Lab'
          text="Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
          />
          <Gallery 
          img1={<img src="/assets/images/computerLab-1.png" alt="" />}
          img2={<img src="/assets/images/computerLab-2.png" alt="" />}
          img3={<img src="/assets/images/computerLab-3.png" alt="" />}
          img4={<img src="/assets/images/computerLab-4.png" alt="" />}
          title='Computer Lab'
          text="Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
          />
          <Gallery 
          img1={<img src="/assets/images/garden-1.png" alt="" />}
          img2={<img src="/assets/images/garden-2.png" alt="" />}
          img3={<img src="/assets/images/garden-3.png" alt="" />}
          img4={<img src="/assets/images/garden-4.png" alt="" />}
          title='Garden and Nature Area'
          text="Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
          />
        </div>
      </div>
    </div>
  )
}

export default Academics
