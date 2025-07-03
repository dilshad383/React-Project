import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './pages/Admissions.jsx'
import StudentLife from './pages/StudentLife.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  return (
    <div>
      <HashRouter>
       <Header />
       <Routes>

        <Route path='/'  element={<Home />}/>
        <Route path='/About'  element={<About />}/>
        <Route path='/Academics'  element={<Academics />}/>
        <Route path='/Admissions'  element={<Admissions />}/>
        <Route path='/StudentLife'  element={<StudentLife />}/>
        <Route path='/Contact'  element={<Contact />}/>
       </Routes>
      
    <Footer />
    </HashRouter>
    </div>
  )
}

export default App
