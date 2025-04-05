import Mediapool from "./feature/Mediapool"
import Footer from "./feature/Footer"
import Queue from "./feature/Queue"
import {useTheme} from "@heroui/use-theme";

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <>
    <div className="h-dvh flex flex-col">

      <div className="p-3 gap-x-3 h-[calc(100%-76px)] w-dvh flex flex-row justify-between">

        <Mediapool theme={theme}/>
        <Queue theme={theme}/>

      </div>

      <div className="p-3 pt-0">
        <Footer theme={theme} setTheme={setTheme}/>
      </div>

    </div>

    </>
  )
}

export default App
