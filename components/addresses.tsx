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
import { NewAddressModal } from "./new-address-modal";

export function Addresses() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="p-4 w-full">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Connected devices"
            title="Addresses"
          >
            <Button
              variant="bordered"
              className="sm:w-full lg:w-auto min-w-[200px] mb-3"
              onPress={onOpen}
            >
              Add Address
            </Button>

            <div className="flex gap-2 px-2">
              <Card className="p-3 min-w-[200px]">
                <CardHeader>
                  <h1 className="font-lighter text-sm">Home</h1>
                </CardHeader>
                <CardBody>
                  <h2 className="text-gray-500 text-xl font-semibold">
                    Billing Address
                  </h2>
                  <h2 className="text-gray-700">
                    1234 Street Name, New York City, USA
                  </h2>
                </CardBody>
                <CardFooter className="font-semibold">
                  <h1>June 23, 2023</h1>
                </CardFooter>
              </Card>
            </div>
          </AccordionItem>
        </Accordion>
      </Card>
      <NewAddressModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
      />
    </>
  );
}
