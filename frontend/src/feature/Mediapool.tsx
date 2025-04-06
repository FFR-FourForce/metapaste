import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import {useDropzone} from 'react-dropzone';
import {useMemo} from "react";
import {ImagePlus} from "lucide-react"

export default function Mediapool({theme,files,setFiles,setCurrentIndex}:{theme : string,files:File[],setFiles:React.Dispatch<React.SetStateAction<File[]>>, setCurrentIndex:React.Dispatch<React.SetStateAction<number>>}){

  const onDrop = (acceptedFiles:File[]) => {
    setFiles([...files,...acceptedFiles])
  }
  const reset = () =>{setFiles([])}
  const {getRootProps, getInputProps, open,} = useDropzone({onDrop, accept: {'video/mpeg': ['.mp4', '.mov']  }}
)

  return (
    <>
      {/* メディアプールのボックス */}
      <Card className="max-w-[30vw] h-full pb-1.5">
      <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${theme === "light"?"text-orange-400":"text-purple-600"}`}>
        <h3 className="font-bold text-2xl w-full text-center">MEDIA POOL</h3>
        <h4 className="font-bold text-sm w-full text-center">Drag and drop files here</h4>
      </CardHeader>

      <div {...getRootProps()} className="h-full w-full py-2 " onClick={(e)=>{e.preventDefault()}} >
      <input {...getInputProps()}/>
      <CardBody className="flex flex-row content-start justify-evenly gap-3 flex-wrap overflow-hidden overflow-y-auto h-[calc(100dvh-236px)]">

            {useMemo(
              ()=>(files.length > 0 ? (
                files.map((file, index) => (
                <div onClick={() => { setCurrentIndex(index)}} className="cursor-pointer">
                  <Card className="w-28 h-fit transform transition-transform duration-200 hover:scale-110" key={index}>
                  <CardHeader className="pb-0 flex-col items-start">
                    <h4 className="text-small w-full truncate">{file.name}</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible">
                    <video
                      className="object-cover rounded-md"
                      src={URL.createObjectURL(file)}
                    />
                  </CardBody>
                  </Card>
                </div>
              ))) : (
                <div className="w-full h-full flex justify-center items-center">
                  <ImagePlus size={50} color="#808080"/>
                </div>
              )
            ), [files, setCurrentIndex])}

      </CardBody>
      </div>

      <CardFooter className="gap-1">
        <Button className={`text-lg w-full ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" onPress={open}>
          SELECT FILES
        </Button>
        <Button variant="bordered" className={`text-lg w-24 ${theme === "light"?"text-fuchsia-600":"text-rose-600"} ${theme === "light"?"border-fuchsia-600":"border-rose-600"}`}  radius="sm" onPress={reset} >
          CLEAR
        </Button>
      </CardFooter>
      </Card>
    </>

  );
}
