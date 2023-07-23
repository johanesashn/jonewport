import About from "./components/About"
import Achievements from "./components/Achievements"
import Display from "./components/Display"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import WalkingText from "./components/WalkingText"
import Cover from "./components/Cover"

export default function App(){
  return (
    <>
      <Navbar/>
      <Jumbotron/>
      <WalkingText/>
      <About/>
      <Projects/>
      <Display/>
      {/* <Achievements/> */}
      {/* <Footer/> */}
    </>
  )
}