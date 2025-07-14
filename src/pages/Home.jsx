
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import OurPages from '../components/OurPages'
import FAQ from '../components/FAQ'
import SectionHeader from '../components/SectionHeader'


function Home() {
  return (
    <div className='bg-[#ffefef]'>
{/* Hero Section */}
      <div className="row grid lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 justify-center w-5/6 mx-auto pt-12 gap-6">
            <div className="col">
                <img src="/assets/images/hero-img.png" alt="" />
            </div>
            <div className="my-auto">
                <div className="">
                    <p className="underline underline-offset-6">Welcome to Little Learners Academy</p>
                    <h1 className="text-4xl mt-4">Where Young Minds Blossom and <span className="text-orange">Dreams Take Flight.</span></h1>

                    <p className="my-4">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>

                    <div className="quick-facts">
                        <img src="/assets/images/stats.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
  {/* Our Benefits */}
      <Features />
      <Testimonials />

      <div className="faqs mt-8">
        <SectionHeader 
        pill='Solutions For The Doubts'
        title="Frequently Asked Questions"
        text="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />
        <FAQ />
      </div>
      <OurPages />
 
    </div>
  )
}

export default Home