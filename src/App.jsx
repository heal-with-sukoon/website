
import FrontPage from "./pages/FrontPage/FrontPage"

import About from "./pages/About/About"

import HelpPage from "./pages/HelpPage/HelpPage"
import SessionPage from "./pages/SessionPage/SessionPage"
import DetoxPage from "./pages/DetoxPage/DetoxPage"
import DostPage from "./pages/DostPage/DostPage"
import ArticlePage from "./pages/ArticlePage/ArticlePage"
import ReviewPage from "./pages/ReviewPage/ReviewPage"
// import Carousel from "./components/Help/Carousel"
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
     
     <ArticlePage/>
     <DostPage/>
     <ReviewPage/>
     {/* <DetoxPage/> */}
    </>
  )
}

export default App
