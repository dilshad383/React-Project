
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import OurPages from '../components/OurPages'
import FAQ from '../components/FAQ'
import SectionHeader from '../components/SectionHeader'


function Home() {
  return (
    <div className='bg-[#ffefef]'>
     
      <Hero />
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