import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@heroui/react";

export default function Mediapool() {
  return (
    <>
      {/* メディアプールのボックス */}
      <Card className="py-4 w-96 h-full top-3 left-3">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h3 className="font-bold text-2xl w-full text-center">MEDIA POOL</h3>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex-row gap-3 flex-wrap">
        
        {/* メディア */}
        <Card className="py-4 w-28">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-small">C1045.mp4</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://heroui.com/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        
        

      </CardBody>
      <CardFooter>
        <Button color="primary" variant="bordered" className="w-full" radius="sm">
          SELECT FILES
        </Button>
      </CardFooter>
      </Card>

    </>
  );
}
