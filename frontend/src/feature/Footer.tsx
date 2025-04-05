import { Twitter, Home, Github, Sun, MoonStar } from "lucide-react";
import { Card, CardHeader, CardBody, Button, ButtonGroup, Link } from "@heroui/react";


export default function Themewitcher ({theme,setTheme}:{theme : string,setTheme : (str:string) => void}) {
  
  return (
    <>
    <Card className="w-full flex flex-row  place-content-between">
      <CardHeader className={`w-fit ${theme === "light"?" bg-amber-500":" bg-violet-400"} ${theme === "light"?"text-[#ffffff]":"text-[#18181b]"}`}>
        <h1 className="text-4xl w-fit">META</h1><a className="text-2xl translate-y-1 pr-1">paste</a>
        <div className={`inline-block rounded-lg px-2 py-0.5 ${theme === "light"?"bg-[#ffffff]":"bg-[#18181b]"}`}>
          <h1 className={`text-3xl w-fit ${theme === "light"?"text-orange-500":"text-purple-600"}`}>GUI</h1>
        </div>
      </CardHeader>
      <CardBody className="gap-3 w-fit flex flex-row justify-end">

        <ButtonGroup
        variant="bordered"
        color={theme === "light"?"warning":"secondary"} >
          <Button className="w-24" radius="sm" as={Link} href="https://x.com/FFR_FOURFORCE" target="_blank">
            <Twitter />
          </Button>
          <Button className="w-24" radius="sm" as={Link} href="https://fffr.jp" target="_blank">
            <Home />
          </Button>
          <Button className="w-24" radius="sm" as={Link} href="https://github.com/FFR-FourForce/metapaste" target="_blank">
            <Github />
          </Button>
        </ButtonGroup>

        <Button
          onPress={() => setTheme(theme === "light"? "dark":"light")}
          color={theme === "light"?"warning":"secondary"}
          startContent={theme === "light"?<MoonStar/>:<Sun/>}
          variant="bordered"
          className="w-24"
          radius="sm"
        >
        </Button>

      </CardBody>
    </Card>
    </>
  )

};





