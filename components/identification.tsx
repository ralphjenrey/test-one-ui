import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { NewIdentificationModal } from "./new-identification-modal";

export function Identification() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="p-4 w-full">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Connected devices"
            title="Identification"
          >
            <Button
              variant="bordered"
              className="sm:w-full lg:w-auto min-w-[200px] mb-3"
              onPress={onOpen}
            >
              Add Identification
            </Button>

            <div className="flex gap-2 px-2">
              <Card className="p-3 min-w-[300px] max-h-[300px]">
                <CardHeader>
                  <h1 className="font-bold text-xl">Drivers License</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>N-0000-0000-0000</h2>
                  <h2>Place issued: Manila</h2>
                  <h2>Date issued: 01/01/2021</h2>
                  <h2>Expiration date: 01/01/2023</h2>
                </CardBody>
                <CardFooter className="font-light">
                  <h1>2 Uploaded Photos</h1>
                </CardFooter>
              </Card>

              <Card className="p-3 min-w-[300px] max-h-[300px]">
                <CardHeader>
                  <h1 className="font-bold text-xl">TIN ID</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>0000-0000-0000</h2>
                  <h2>Place issued: Manila</h2>
                  <h2>Date issued: 01/01/2021</h2>
                  <h2>Expiration date: 01/01/2023</h2>
                </CardBody>
                <CardFooter className="font-light">
                  <h1>2 Uploaded Photos</h1>
                </CardFooter>
              </Card>

              <Card className="p-3 min-w-[300px] max-h-[300px]">
                <CardHeader>
                  <h1 className="font-bold text-xl">SSS</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>N-00-00001</h2>
                  <h2>Place issued: Manila</h2>
                  <h2>Date issued: 01/01/2021</h2>
                  <h2>Expiration date: 01/01/2023</h2>
                </CardBody>
                <CardFooter className="font-light">
                  <h1>2 Uploaded Photos</h1>
                </CardFooter>
              </Card>

              <Card className="p-3 min-w-[300px] max-h-[300px]">
                <CardHeader>
                  <h1 className="font-bold text-xl">National ID</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>N-00-00001</h2>
                  <h2>Place issued: Manila</h2>
                  <h2>Date issued: 01/01/2021</h2>
                  <h2>Expiration date: 01/01/2023</h2>
                </CardBody>
                <CardFooter className="font-light">
                  <h1>2 Uploaded Photos</h1>
                </CardFooter>
              </Card>
            </div>
          </AccordionItem>
        </Accordion>
      </Card>
      
      <NewIdentificationModal isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} />
    </>
  );
}
