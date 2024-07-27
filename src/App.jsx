
import Breathe from "./components/About/Breathe/Breathe"
import FrontPage from "./pages/FrontPage/FrontPage"
import Service from "./components/Service/Service"
import About from "./pages/About/About"
import Help from "./components/Help/Help/Help"
import HelpPage from "./pages/HelpPage/HelpPage"
function App() {


  return (
    <>
    <div className="bg-[#E3DFF8]">
    <FrontPage/>
    </div>
    {/* <Breathe/> */}
    <About/>
    <HelpPage/>
    </>
  )
}

export default App
