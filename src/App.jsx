
import FrontPage from "./pages/FrontPage/FrontPage"

import About from "./pages/About/About"

import HelpPage from "./pages/HelpPage/HelpPage"
import SessionPage from "./pages/SessionPage/SessionPage"
import DetoxPage from "./pages/DetoxPage/DetoxPage"
import DostPage from "./pages/DostPage/DostPage"
import ArticlePage from "./pages/ArticlePage/ArticlePage"
import ReviewPage from "./pages/ReviewPage/ReviewPage"
import TherapyPage from "./pages/TherapyPage/TherapyPage"
// import Carousel from "./components/Help/Carousel"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
    <div className="bg-[#E3DFF8]">
    <FrontPage/>
    </div>
    {/* <Breathe/> */}
    <About/>
    <HelpPage/>
    <SessionPage/>
    <TherapyPage/>
    <img src="/heal.svg" alt="heal" className="w-screen"/>
     <ArticlePage/>
     <DostPage/>
     <ReviewPage/>
     {/* <DetoxPage/> */}
    <Footer/>
    </>
  )
}

export default App
