import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import WalkingText from "./components/WalkingText"
import Projects from "./components/Projects"
import Loader from "./components/Loader"
import Cursor from "./components/Cursor"
import Skills from "./components/Skills"
import Company from "./components/Company"
import Footer from "./components/Footer"

export default function App(){
  return (
    <main>
      <Cursor/>
      <Loader/> 
      <Navbar/>
      <Jumbotron/>
      <WalkingText text="CS STUDENT | SOFTWARE DEVELOPER | 200+ PROBLEMS ON LEETCODE | FREELANCER | INDONESIAN |"/>
      <Projects/>
      <Company/>
      <Skills/>
      <Footer/>
      <WalkingText text="GOODBYE. ADIOS. SAYONARA. SELAMAT-TINGGAL." class="footer"/>
    </main>
  )
}