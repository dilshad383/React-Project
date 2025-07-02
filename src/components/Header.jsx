import '../App.css'
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='bg-[#ffefef]'>
      <header>
        <div className="nav-top border bg-white relative">
          <div className="icons">
            <div className="left-mask absolute">
              <img src="/assets/icons/mask.png" alt="" />
            </div>
            <div className="left-sphere absolute left-80 sm:hidden">
              <img src="assets/icons/Abstract-Design.png" alt="" />
            </div>
            <div className="right-sphere absolute right-90 bottom-0 sm:hidden">
              <img src="assets/icons/Abstract-Design-2.png" alt="" />
            </div>
            <div className="right-mask absolute right-0">
              <img src="assets/icons/mask.png" alt="" />
            </div>
          </div>
          <div className="text-wrapper flex gap-2 justify-center mt-5">
            <p className="text-center">Admission is Open, Grab your seat now </p>
            <img src="assets/icons/arrow.png" alt="" />
          </div>
        </div>

        <nav className="border bg-white sm:flex-col md:flex-row">
          <div className="sm-nav sm:flex">
            <div className="brand">
              <img className='w-10/12 rounded-md' src="/assets/icons/logo.png" alt="" />
            </div>
            <div 
            onClick={() => setIsOpen(!isOpen)} 
 
            aria-label="Toggle Menu"
            className="menu-toggle md:hidden sm:ml-auto cursor-pointer">
              <img src="/assets/icons/menu-icon.png" alt="" />
            </div>
          </div>
          <div className={`navbar sm:flex-col sm:w-full sm:items-center  ${
            isOpen ? "flex" : "hidden"
          } md:flex md:flex-row `}>
            <div className="nav-item bg-lt-peach md:ml-auto "><a href="/" className="nav-link">Home</a></div>
            <div className="nav-item"><a href="/about" className="nav-link">About Us</a></div>
            <div className="nav-item"><a href="/academics" className="nav-link">Academics</a></div>
            <div className="nav-item"><a href="/admissions" className="nav-link">Admissions</a></div>
            <div className="nav-item"><a href="/StudentLife" className="nav-link">Student Life</a></div>
            <div className="nav-item bg-orange"><a href="/contact" className="nav-link">Contact</a></div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
