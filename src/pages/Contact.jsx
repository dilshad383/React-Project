import '../App.css'
import Main from '../components/Main'

const Contact = () => {
  return (
    <div className='bg-[#ffefef] py-12'>
      <Main 
      pill="Contact Us"
      title='Feel Free To Connect With Us'
      text='We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods'
      info={<div className='grid grid-cols-2 gap-4 mt-8'>
            <div className="border-2 rounded-md p-2 flex items-center gap-2">
                <div className="icon">
                    <img src="/assets/icons/email.png" alt="" />
                </div>
                <div className="text">hello@littlelearners.com</div>
            </div>
            <div className="border-2 rounded-md p-2 flex items-center gap-2">
                <div className="icon">
                    <img src="/assets/icons/phone.png" alt="" />
                </div>
                <div className="text">+91 91813 23 2309</div>
            </div>
            <div className="border-2 rounded-md p-2 flex items-center gap-2">
                <div className="icon">
                    <img src="/assets/icons/location.png" alt="" />
                </div>
                <div className="text">Somewhere in the World</div>
            </div>
            <div className="border-2 rounded-md p-2 flex items-center gap-2">
                <div className="icon">
                    <img src="/assets/icons/clock.png" alt="" />
                </div>
                <div className="text">Office Hours - 9am - 6 pm</div>
            </div>
      </div>}
      />

      <form action="" className="relative border rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8) w-5/6 mx-auto px-12 mt-24 bg-white">
        <div className="icon-row flex gap-4 absolute md:left-1/2 md:transform md:-translate-x-1/2 max-w-[90%] max-sm:w-[20%] -top-[5%] max-sm:-top-[2%]">
            <img src="/assets/icons/facebook-icon.png" alt="" />
            <img src="/assets/icons/twitter-icon.png" alt="" />
            <img src="/assets/icons/linkedin-icon.png" alt="" />
        </div>

        <div className="input-wrapper grid md:grid-cols-2 gap-x-8 py-8 mt-8">
            <div className="col">
                <label htmlFor="Parent Name">
                    Parent Name
                </label>
                <input name='Parent Name' id="Parent Name" type="text" placeholder='Enter Parent Name' />
            </div>
            <div className="col">
                <label htmlFor="Email Address">
                    Email Address
                </label>
                <input type="email" name="" id="Email Address" placeholder='Email Address' />
            </div>
            <div className="col">
                <label htmlFor="Phone Number">
                    Phone Number
                </label>
                <input type="number" name="" id="Phone Number" placeholder='Enter Phone Number' />
            </div>
            <div className="col">
                <label htmlFor="Student Name">
                Student Name
                </label>
                <input type="text" name="" id="Student Name" placeholder='Enter Student Name' />
            </div>
            <div className="col">
                <label htmlFor="Student Age">
                Student Name
                </label>
                <input type="text" name="" id="Student Age" placeholder='Enter Student Age' />
            </div>
            <div className="col">
                <label htmlFor="program">
                Program of Intrest
                </label>
                <select name="" id="program">
                    <option value="">Select Program</option>
                    
                </select>
            </div>
        </div>
        <label htmlFor="Message">
            Message
        </label>
        <textarea className='border' name="" id="Message" placeholder='Enter Your Message'>

        </textarea>
        <button className='w-full bg-[#FFAE80] py-3 mt-4  mb-14 rounded-md border'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
