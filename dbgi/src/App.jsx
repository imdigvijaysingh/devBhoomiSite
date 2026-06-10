import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/AboutUs'
import Courses from './pages/Courses'
import Admission from './pages/Admission'
import ContactUs from './pages/ContactUs'
import Placements from './pages/Placements'
import Career from './pages/Career'
import Umeed from './pages/Umeed'
import Academics from './pages/Academics'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pages/about-us' element={<About />} />
        <Route path='/pages/admission' element={<Admission />} />
        <Route path='/pages/courses' element={<Courses />} />
        <Route path='/pages/academics' element={<Academics />} />
        <Route path='/pages/contact-us' element={<ContactUs />} />
        <Route path='/pages/placements' element={<Placements />} />
        <Route path='/pages/career' element={<Career />} />
        <Route path='/pages/umeed' element={<Umeed />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App