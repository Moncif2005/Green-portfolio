import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


createRoot(document.getElementById('root')).render(
 <>
  <Home />
  <AboutMe />
  <MyWork />
  <Contact />
  <Footer />
 </>
)
