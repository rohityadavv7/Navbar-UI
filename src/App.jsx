import Navbar from "./Components/Navbar"
import { PageWrapper } from "./Components/PageWrapper"
import {motion} from "motion/react"

function App() {
  

  return (
    <div className="h-screen w-screen flex flex-col items-center font-['Laussane'] bg-zinc-950 ">
      <PageWrapper>
          <Navbar/>
      </PageWrapper>
      
    </div>
  )
}

export default App
