import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";

export function NewContactModal({ isOpen, onOpenChange, onOpen }: any) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="p-2"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update New Contact
              </ModalHeader>
              <ModalBody className="flex justify-center">
            
                <div className="grid gap-2 grid-cols-1">
                  <div className="grid grid-cols-2 gap-2">
                  <Input
                      label="Label"
                      className="col-span-1"
                    />
                    <Dropdown className="col-span-1">
                      <DropdownTrigger>
                        <Button
                          className="capitalize bg-[#F4F4F5] text-gray-700 h-14"
                          endContent={
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 17 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.6047 0.32257C16.2996 0.0174766 15.8049 0.0174766 15.4998 0.32257L8.50017 7.32218L1.50048 0.32257C1.19537 0.0174766 0.70079 0.0174766 0.395685 0.32257C0.0905819 0.627664 0.0905819 1.12233 0.395685 1.42742L7.94777 8.97948C8.25287 9.28458 8.74746 9.28458 9.05256 8.97948L16.6047 1.42742C16.9098 1.12233 16.9098 0.627664 16.6047 0.32257Z"
                                fill="#969696"
                              />
                            </svg>
                          }
                        >
                          Select Type
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                      >
                        <DropdownItem key="text">Type 1</DropdownItem>
                        <DropdownItem key="text">Type 2</DropdownItem>
                        <DropdownItem key="text">Type 3</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  <Input label="Detail / Value" />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button variant="bordered" onPress={onClose} className="w-1/2">
                 Update Contact
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
