import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import WalkingText from "./components/WalkingText"
import Projects from "./components/Projects"
import Loader from "./components/Loader"
import Cursor from "./components/Cursor"
import Skills from "./components/Skills"
import Company from "./components/Company"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

export default function App(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
      setTimeout(() => {
        window.scrollTo(0,0)
      }, 500);

  }, [])

  return (
    <main>
      <Cursor/>
      {loading === true ? 
        <Loader/> 
        : 
        <>
          <Navbar/>
          <Jumbotron/>
          <WalkingText text="STUDENT. WEB-DEVELOPER. INDONESIAN."/>
          <Projects/>
          <Company/>
          <Skills/>
          <Footer/>
          <WalkingText text="GOODBYE. ADIOS. SAYONARA. SELAMAT-TINGGAL." class="footer"/>
        </>
      } 
    </main>
  )
}