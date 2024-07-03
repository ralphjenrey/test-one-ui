import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";

export function PersonalDetails() {


  return (
    <Card className="p-8 w-full">
      <CardHeader>
        <h1 className="font-bold text-3xl">Personal Details</h1>
      </CardHeader>
      <CardBody>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Input label="First name" />
          </div>
          <div>
            <Input label="Last name" />
          </div>
          <div>
            <Input label="Middle name" />
          </div>
          <div>
            <Input label="Suffix" />
          </div>
          <div>
            <Input label="Birthday" />
          </div>
          <div>
            <Input label="Civil Status" />
          </div>
          <div>
            <Input label="Gender" />
          </div>
          <div>
            <Input label="Profession" />
          </div>
          <div>
            <Input label="Active" />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-end w-full">
          <Button
            variant="bordered"
            className="sm:w-full lg:w-auto min-w-[200px]"
          >
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
