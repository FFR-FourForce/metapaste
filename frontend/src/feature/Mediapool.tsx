import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import {useDropzone} from 'react-dropzone';
import {  useMemo, useState} from "react";

export default function Mediapool({theme}:{theme : string}) {
  const [files,setFiles]=useState<File[]>([])
  const onDrop = (acceptedFiles:File[]) => {
    setFiles([...files,...acceptedFiles])
    setFileIndexZero() //インデックスが存在しない箇所を示さないように、ファイル読み込みのたびにカレントインデックスをリセットする
  }
  const reset = () =>{setFiles([])}

  const {getRootProps, getInputProps, open,} = useDropzone({onDrop, accept: {'video/mpeg': ['.mp4', '.mov']  }})

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextFile = () =>{
    setCurrentIndex((prevIndex) => (prevIndex === files.length - 1? 0 : prevIndex + 1))
  }
  const previousFile = () =>{
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? files.length - 1: prevIndex - 1))
  }
  const setFileIndexZero = () =>{
    setCurrentIndex(0) 
  }


  return (
    <>
      {/* メディアプールのボックス */}
      <Card className="max-w-[30vw] h-full pb-1.5">
      <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${theme === "light"?"text-orange-400":"text-purple-600"}`}>
        <h3 className="font-bold text-2xl w-full text-center">MEDIA POOL</h3>
        <h4 className="font-bold text-sm w-full text-center">Drag and drop files here</h4>
      </CardHeader>

      <div {...getRootProps()} className="h-full w-full py-2 " >
      <input {...getInputProps()} />
      <CardBody className="flex flex-row content-start justify-evenly gap-3 flex-wrap overflow-hidden overflow-y-auto h-[calc(100dvh-236px)]">

        {/* メディア */}
        {useMemo(()=>files.map(file => (
          <>
            <Card className="w-28 h-fit" key={file.name}>
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
          </>
        )), [files])}

      </CardBody>
      </div>

      <CardFooter className="gap-1">
        <Button className={`text-lg w-full ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" onPress={open}>
          SELECT FILES
        </Button>
        <Button variant="bordered" className={`text-lg w-24 ${theme === "light"?"text-fuchsia-600":"text-rose-600"} ${theme === "light"?"border-fuchsia-600":"border-rose-600"}`}  radius="sm" onPress={reset} >
          CANCEL
        </Button>
      </CardFooter>
      </Card>

      
      {/* エディット部分 */}
      <Card className="flex-1 h-full pb-1.5 justify-end">
      <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${theme === "light"?"text-orange-400":"text-purple-600"}`}>
        <h3 className="font-bold text-2xl w-full text-center">EDIT</h3>
      </CardHeader>
      <CardBody className="flex flex-col content-start justify- gap-3 flex-wrap overflow-hidden overflow-y-auto h-[calc(100dvh-236px)]">
        
        {files.length > 0 ? (
        <Card className="w-full h-fit">
        <CardHeader className="pb-0 flex-col items-start">
          <h4 className="text-small w-full truncate">{files[currentIndex].name}</h4>
        </CardHeader>
        <CardBody className="overflow-hidden">
          <video
            className="rounded-md max-h-[40vh] object-contain"
            src={URL.createObjectURL(files[currentIndex])}
          />
        </CardBody>
        </Card>
        ): (
        <Card className="w-full h-[30%]">
        <CardBody className="overflow-hidden justify-center items-center">
          <h4 className={`text-2xl ${theme === "light"?"text-orange-200":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`}>NO PREVIEW AVAILABLE</h4>
        </CardBody>
        </Card>
        )}

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
      <CardFooter className="gap-1">
        <Button className={`text-lg w-full ${theme === "light"?"text-orange-500":"text-purple-600"} ${theme === "light"?"border-orange-500":"border-purple-600"}`} variant="bordered" radius="sm" >
          RENDER ALL
        </Button>
      </CardFooter>
      </Card>

    </>
    
  );
}
