import {useTheme} from "@heroui/use-theme";
import {Button} from "@heroui/react";

import lighticon from "../assets/sun.svg";
import darkicon from "../assets/moon-star.svg";

export default function Themewitcher () {
  const { theme, setTheme } = useTheme()

  return (
    <>
    <div className="fixed bottom-3 right-3 flex-row gap-3">

      <Button 
        onPress={() => setTheme(theme === "light"? "dark":"light")} 
        color={theme === "light"?"secondary":"warning"}
        startContent={theme === "light"?<img src={darkicon}/>:<img src={lighticon}/>}
        variant="bordered">
      </Button>

    </div>    

    <div className="fixed bottom-3 left-3 flex-row gap-3">

        <h1 className="text-4xl">METApaste GUI</h1>    
        
    </div>
    </>
  )

};





