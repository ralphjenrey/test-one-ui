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

export function Map() {
  return (
    <>
      <Card className="p-4 w-full">
        <Accordion>
          <AccordionItem key="1" aria-label="Google Map" title="Map">
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7850.274752909304!2d123.907266!3d10.33088935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999218ad96ccd%3A0x73cd2c6cb520d2c!2sCebu%20IT%20Park%2C%20Cebu%20City%2C%206000%20Cebu!5e0!3m2!1sen!2sph!4v1720024678748!5m2!1sen!2sph"
                width="100%"
                height="400"
                loading="lazy"
              />
            </div>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  );
}
