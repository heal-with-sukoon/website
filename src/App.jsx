

import FrontPage from "./pages/FrontPage/FrontPage"

import About from "./pages/About/About"

import HelpPage from "./pages/HelpPage/HelpPage"
import Card from "./components/Help/Card"
function App() {


  return (
    <>
    <div className="bg-[#E3DFF8]">
    <FrontPage/>
    </div>
    {/* <Breathe/> */}
    <About/>
    <HelpPage/>
    <Card/>
    </>
  )
}

export default App
