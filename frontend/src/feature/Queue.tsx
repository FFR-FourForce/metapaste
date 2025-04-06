import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";

export default function Queue({theme}:{theme : string}){
  return (
    <>
      {/* メディアプールのボックス */}
      <Card className="w-[40vw] h-full pb-1.5 justify-end">
      <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${theme === "light"?"text-orange-400":"text-purple-600"}`}>
        <h3 className="font-bold text-2xl w-full text-center">QUEUE</h3>
      </CardHeader>
      <CardBody className="flex flex-col content-start gap-3 flex-wrap overflow-hidden overflow-y-auto h-[calc(100dvh-236px)]">

        {/* メディア */}
        <Card className="w-full h-24 flex flex-row">
          <CardBody className="overflow-visible">
            

          </CardBody>
          <CardHeader className="pb-0 flex-col items-start">
            <h4 className="text-small w-full truncate">c1234example.mp4</h4>
          </CardHeader>
        </Card>


      </CardBody>
      <CardFooter className="gap-1">
        <Button className={`w-full text-lg ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" >
          DOWNLOAD ALL
        </Button>
      </CardFooter>
      </Card>

    </>
  );
}

