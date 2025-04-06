import Mediapool from "./feature/Mediapool"
import Footer from "./feature/Footer"
import Queue from "./feature/Queue"
import Edit from "./feature/Edit";
import { useTheme } from "@heroui/use-theme";
import { useState } from "react";

function App() {
  const { theme, setTheme } = useTheme()
  const [files,setFiles]=useState<File[]>([])
  return (
    <>
    <div className="h-dvh flex flex-col">

      <div className="p-3 gap-x-3 h-[calc(100%-76px)] w-dvh flex flex-row justify-between">

        <Mediapool theme={theme} files={files} setFiles={setFiles} />
        <Edit theme={theme} files={files}/>
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
