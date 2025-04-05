import Mediapool from "./feature/Mediapool"
import Footer from "./feature/Footer"
import {useTheme} from "@heroui/use-theme";

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <>
    <div className="h-dvh flex flex-col">

      <div className="flex-1 p-3 h-[calc(100%-76px)]">

        <Mediapool theme={theme}/>

      </div>

      <div className="p-3 pt-0">
        <Footer theme={theme} setTheme={setTheme}/>
      </div>

    </div>

    </>
  )
}

export default App
