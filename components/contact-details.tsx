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
import { NewContactModal } from "./new-contact-modal";

export function ContactDetails() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="p-4 w-full">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Connected devices"
            title="Contact Details"
          >
            <Button
              variant="bordered"
              className="sm:w-full lg:w-auto min-w-[200px] mb-3"
              onPress={onOpen}
            >
              Add Contact
            </Button>

            <div className="flex gap-2 px-2">
              <Card className="p-3 min-w-[200px]">
                <CardHeader>
                  <h1 className="font-lighter text-xl">Mobile Number</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>09123456789</h2>
                </CardBody>
                <CardFooter className="font-semibold">
                  <h1>June 23, 2023</h1>
                </CardFooter>
              </Card>

              <Card className="p-3 min-w-[200px]">
                <CardHeader>
                  <h1 className="font-lighter text-xl">Landline</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>02-123-4567</h2>
                </CardBody>
                <CardFooter className="font-semibold">
                  <h1>June 23, 2023</h1>
                </CardFooter>
              </Card>

              <Card className="p-3 min-w-[200px]">
                <CardHeader>
                  <h1 className="font-lighter text-xl">Email</h1>
                </CardHeader>
                <CardBody className="text-gray-500">
                  <h2>loquellano@gmail.com</h2>
                </CardBody>
                <CardFooter className="font-semibold">
                  <h1>June 23, 2023</h1>
                </CardFooter>
              </Card>
            </div>
          </AccordionItem>
        </Accordion>
      </Card>

      <NewContactModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
      />
    </>
  );
}
