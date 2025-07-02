
import Main from '../components/Main'
import SectionHeader from '../components/SectionHeader'
import '../App.css'

const Admission = () => {
  return (
    <div className='py-12 bg-[#FFF5F0] relative -z-10'>
      <Main 
      pill='Admission'
      title='Join Our Family of Young Learners'
      text="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />

      <div className="admission-process w-5/6 mx-auto">
        <SectionHeader 
        pill='Process'
        title='Admission Process'
        text="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />

        <div className="card-wrapper w-5/6 mx-auto grid md:grid-cols-3 md:gap-6">
          <div className="card">
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  relative mt-12 inline-block p-4 font-semibold text-3xl steps-wrapper bg-white">
              01
            <span className="block border-2 bg-white w-5 h-5 absolute left-3/6 -translate-3/6 -bottom-5 rounded-full"></span>
            <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -bottom-13 left-3/6 -translate-x-3/6 -z-2"></span>
            </div>
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] relative mt-12 p-8 pb-14 bg-white">
              <h1 className="text-2xl font-semibold mb-3">
                Inquiry
              </h1>
              <p>Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  relative mt-12 inline-block p-4 font-semibold text-3xl steps-wrapper bg-white">
              <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -top-13 left-3/6 -translate-x-3/6 -z-2 md:hidden"></span>
              02
            <span className="block border-2 bg-white w-5 h-5 absolute left-3/6 -translate-3/6 -bottom-5 rounded-full"></span>
            <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -bottom-13 left-3/6 -translate-x-3/6 -z-2"></span>
            </div>
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] relative mt-12 p-8 pb-14 bg-white">
              <h1 className="text-2xl font-semibold mb-3">
                School Tour
              </h1>
              <p>Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  relative mt-12 inline-block p-4 font-semibold text-3xl steps-wrapper bg-white">
              <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -top-13 left-3/6 -translate-x-3/6 -z-2 md:hidden"></span>
              03
            <span className="block border-2 bg-white w-5 h-5 absolute left-3/6 -translate-3/6 -bottom-5 rounded-full"></span>
            <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -bottom-13 left-3/6 -translate-x-3/6 -z-2"></span>
            </div>
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] relative mt-12 py-8 px-4 bg-white">
              <h1 className="text-2xl font-semibold mb-3">
                Application Form
              </h1>
              <p>Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).
              </p>
            </div>
          </div>
          <div className="card">
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  relative mt-12 inline-block p-4 font-semibold text-3xl steps-wrapper bg-white">
              <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -top-13 left-3/6 -translate-x-3/6 -z-2 md:hidden"></span>
              04
            <span className="block border-2 bg-white w-5 h-5 absolute left-3/6 -translate-3/6 -bottom-5 rounded-full"></span>
            <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -bottom-13 left-3/6 -translate-x-3/6 -z-2"></span>
            </div>
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] relative mt-12 py-8 px-4 bg-white">
              <h1 className="text-2xl font-semibold mb-3">
                Parent Interview
              </h1>
              <p>We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  relative mt-12 inline-block p-4 font-semibold text-3xl steps-wrapper bg-white">
              <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -top-13 left-3/6 -translate-x-3/6 -z-2 md:hidden"></span>
              05
            <span className="block border-2 bg-white w-5 h-5 absolute left-3/6 -translate-3/6 -bottom-5 rounded-full"></span>
            <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -bottom-13 left-3/6 -translate-x-3/6 -z-2"></span>
            </div>
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] relative mt-12 p-8 pb-8 bg-white">
              <h1 className="text-2xl font-semibold mb-3">
                Student Assessment
              </h1>
              <p>For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  relative mt-12 inline-block p-4 font-semibold text-3xl steps-wrapper bg-white">
              <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -top-13 left-3/6 -translate-x-3/6 -z-2 md:hidden"></span>
              06
            <span className="block border-2 bg-white w-5 h-5 absolute left-3/6 -translate-3/6 -bottom-5 rounded-full"></span>
            <span className="w-2.5 h-13 border-4 border-[#FFBE99] bg-black block absolute -bottom-13 left-3/6 -translate-x-3/6 -z-2"></span>
            </div>
            <div className="border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] relative mt-12 p-8 pb-14 bg-white">
              <h1 className="text-2xl font-semibold mb-3">
                Acceptance
              </h1>
              <p>Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Fee-Structure">
        <SectionHeader 
        pill='Our Features'
        title='Fee Structure'
        text='Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.'
        />

        <div className="table-wrapper bg-white p-4 border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] w-11/12 mx-auto mt-8">
          <table className="w-full">
            <tr>
              <td className="border rounded-md border-r-0 p-2">Program</td>
              <td className="border p-2">Age Group</td>
              <td className="border p-2">Annual Tuition</td>
              <td className="border p-2">Registration Fee</td>
              <td className="border border-l-0 p-2">Activity Fee</td>
            </tr>
            <tr><td className='p-2'></td></tr>
            <tr>
              <td className="border rounded-md border-r-0 p-2">Nursery</td>
              <td className="border p-2">2 - 3 years</td>
              <td className="border p-2">$1,686</td>
              <td className="border p-2">$162</td>
              <td className="border border-l-0 p-2">$12</td>
            </tr>
            <tr>
              <td className="border rounded-md border-r-0 p-2">Pre-Kindergartens</td>
              <td className="border p-2">3 - 4 years</td>
              <td className="border p-2">$2,686</td>
              <td className="border p-2">$220</td>
              <td className="border border-l-0 p-2">$16</td>
            </tr>
            <tr>
              <td className="border rounded-md border-r-0 p-2">Nursery</td>
              <td className="border p-2">4 - 5 years</td>
              <td className="border p-2">$3,686</td>
              <td className="border p-2">$340</td>
              <td className="border border-l-0 p-2">$20</td>
            </tr>
          </table>
        </div>

        <div className="p-4 bg-white border-2 rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] mt-12 w-11/12 mx-auto">
          <table className='w-full'>
            <tr>
              <th colSpan='2' className='border p-2'>Additonal Sevices</th>
            </tr>
            <tr>
              <td className='border p-2'>Before and After-School Care</td>
              <td className='border p-2'>$120 / per month</td>
            </tr>
            <tr>
              <td className='border p-2'>Language Immersion Program</td>
              <td className='border p-2'>$60 / per month</td>
            </tr>
            <tr>
              <td className='border p-2'>Transportation (optional)</td>
              <td className='border p-2'>$80 / per month</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admission
