import { useEffect, useState} from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import { parseMetadata } from "@uswriting/exiftool";

async function readMetadata(file:File){
  const result = await parseMetadata(file,{
    args: ['-json','-n'],
    transform: (data:string) => JSON.parse(data)
  }) //メタデーターを読み取りresultに書き込む
  if (result.success){
    console.log(result.data[0])
    return(result.data[0])
  }
}

export default function Edit({ theme, files, currentIndex,setCurrentIndex}: { theme: string, files: File[], currentIndex:number,setCurrentIndex:React.Dispatch<React.SetStateAction<number>> }) {

  const [metaData,setMetadata] = useState<object>()

  const nextFile = async () =>{
    setCurrentIndex((prevIndex) => (prevIndex === files.length - 1? 0 : prevIndex + 1))
    const metametaData = await readMetadata(files[(currentIndex === files.length - 1? 0 : currentIndex + 1)])
    setMetadata(metametaData)
  }
  const previousFile = async () =>{
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? files.length - 1: prevIndex - 1))
    const metametaData = await readMetadata(files[(currentIndex === 0 ? files.length - 1: currentIndex - 1)])
    setMetadata(metametaData)
  }
  useEffect(() => {
    setCurrentIndex(0)
    const readMetadataAsync = async () => {
      const metametaData = await readMetadata(files[0])
      setMetadata(metametaData)
    }
    readMetadataAsync()
  }, [files, setCurrentIndex, setMetadata]);

  useEffect(() => {
    const readMetadataAsync = async () => {
      const metametaData = await readMetadata(files[currentIndex])
      setMetadata(metametaData)
    }
    readMetadataAsync()
  }, [currentIndex, files]);

return (
  <>
    {/* エディット部分 */}
    <Card className="flex-1 h-full pb-1.5 justify-end">
    <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${theme === "light"?"text-orange-400":"text-purple-600"}`}>
      <h3 className="font-bold text-2xl w-full text-center">EDIT</h3>
    </CardHeader>
    <CardBody className="flex flex-col content-start justify- gap-3 flex-wrap overflow-hidden overflow-y-auto h-[calc(100dvh-236px)]">

      {files.length > 0 ? (
        <>
        <Card className="w-full h-fit">
        <CardHeader className="pb-0 flex-col items-start">
          <h4 className="text-small w-full truncate">{files[currentIndex].name}</h4>
        </CardHeader>
        <CardBody className="overflow-hidden gap-3">

          <video
            className="rounded-md max-h-[30vh] object-contain"
            src={URL.createObjectURL(files[currentIndex])}
          />

          <div className="fix-row fix flex justify-between w-full">
          <Button className={`text-lg w-20 ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" onPress={previousFile} disabled={files.length === 0}>
            PREVIOUS
          </Button>
          <h4 className={`text-2xl ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`}>{currentIndex + 1} / {files.length}</h4>
          <Button className={`text-lg w-20 ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" onPress={nextFile} disabled={files.length === 0}>
            NEXT
          </Button>
          </div>

        </CardBody>
        </Card>
        <Card className="w-full h-fit">
        <CardBody className="overflow-hidden gap-3">
          
        <h4>
        {metaData && (
          <>
          Maker: {metaData.Make} {metaData.Model}<br />
          Model: {metaData.LensID}<br/>
          Focal Length: {metaData.FocalLength} mm<br/>
          Apeature: f-{metaData.FNumber} <br/>
          Shutter Speed: 1 / {1 / metaData.ShutterSpeed}
          </>
        )}
        </h4>


        </CardBody>
        </Card>
        </>
      ): (
      <Card className="w-full h-[30%]">
      <CardBody className="overflow-hidden justify-center items-center">
        <h4 className={`text-2xl ${theme === "light"?"text-orange-200":"text-purple-900"} ${theme === "light"?"border-orange-500":"border-purple-600"}`}>NO PREVIEW AVAILABLE</h4>
      </CardBody>
      </Card>
      )}


      


    </CardBody>
    <CardFooter className="gap-1">
      <Button className={`text-lg w-full ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" >
        RENDER ALL
      </Button>
    </CardFooter>
    </Card>
  </>
  )
}