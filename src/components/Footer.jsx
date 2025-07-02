import '../App.css'

const Footer = () => {
  return (
    <div className='bg-[#ffefef] py-10'>
      <div className="footer border rounded-md shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)]  w-11/12 mx-auto bg-white">
        <div className="footer-nav  px-10 pt-20 pb-10">
            <div className="">
                <div className="footer-logo">
                    <img src="/assets/icons/footer-logo.png" alt="" />
                    <p className='mt-2 '>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                </div>
                <div className="contact-info mt-10">
                  <div className="flex gap-4 mt-4"><img src="/assets/icons/email.png" alt="" /><span className='my-auto'>hello@littlelearners.com</span></div>
                  <div className="flex gap-4 my-4"><img src="/assets/icons/phone.png" alt="" /><p className='my-auto'>+91 91813 23 2309</p></div>
                  <div className="flex gap-4"><img src="/assets/icons/location.png" alt="" /><p className='my-auto'>Somewhere in the World</p></div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-y-8 md:ml-20 md:grid-cols-4">
              <div className="">
                <ul className="list-none">
                  <li>Home</li>
                  <li>Features</li>
                  <li>Our Testimonials</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="">
                <ul className="list-none ">
                  <li>About Us</li>
                  <li>Our Mission</li>
                  <li>Our Vission</li>
                  <li>Awards and Recongnitions</li>
                  <li>History</li>
                  <li>Teachers</li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-none">
                  <li>Academics</li>
                  <li>Special Features</li>
                  <li>Gallery</li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-none">
                  <li>Contact Us</li>
                  <li>Information</li>
                  <li>Map &amp; Direction</li>
                </ul>
              </div>
            </div>

        </div>
        <div className="w-11/12 mx-auto h-0.5 my-2 bg-black"></div>
        <div className="wrapper flex items-center max-sm:flex-col w-11/12 mx-auto">
          <div className="ml-12 sm:ml-2 my-8">
            <a className='border-r-2 px-4 py-1' href="#">Terms of Service</a>
            <a className='border-r-2 px-4 py-1 mr-6' href="#">Privacy Policy</a>
            <a href="#">Coolie Policy</a>
          </div>
          <div className="flex gap-4 md:ml-auto mr-16 sm:mr-4">
            <a href="#" className=""><img src="/assets/icons/facebook.png" alt="" /></a>
            <a href="#" className=""><img src="/assets/icons/twitter.png" alt="" /></a>
            <a href="#" className=""><img src="/assets/icons/linkedin.png" alt="" /></a>
          </div>
        </div>
        <div className="w-11/12 mx-auto h-0.5 my-2 mb-8 bg-black"></div>
      </div>
    </div>
  )
}

export default Footer
