'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import React from "react";
import { Button } from "@heroui/button";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/dropdown";
export default function Bookdemo() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Choose Course"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  return (
    <>
       <Button onPress={onOpen} className=" bg-amber-400 dark:text-black m-5" >Book Free Demo</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col  m-0  max-w-[90%] text-center">Book Free Demo!</ModalHeader>
              <ModalBody>
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="flex flex-col items-center justify-center gap-2 mb-2">
        
        <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
          "Get started on your career with us and enjoy the experience."
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        {/* <label className="font-semibold text-xs text-black-400">Full Name*</label> */}
        <input
          placeholder="Full Name"
          className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        />
      </div>
    </div>
    <div className="w-full flex flex-col gap-2">
      {/* <label className="font-semibold text-xs text-black-400">Phone number*</label> */}
      <input
        placeholder="Mobile No."
        className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        type="number"
      />
          <input
        placeholder="Location"
        className="border rounded-lg px-3 py-2  mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
        type="text"
      />
     
     
       <Dropdown>
      <DropdownTrigger>
        <Button  className=" capitalize text-left" variant="flat" >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys) => {
          const newKeys = new Set(Array.from(keys).map(key => String(key)));
          setSelectedKeys(newKeys);
        }}
      >
    <DropdownItem key="Web Development">Web Development</DropdownItem>
<DropdownItem key="UI/UX Design">UI/UX Design</DropdownItem>
<DropdownItem key="Database Management">Database Management</DropdownItem>
<DropdownItem key="Version Control with Git">Version Control with Git</DropdownItem>
<DropdownItem key="Digital Marketing">Digital Marketing</DropdownItem>
<DropdownItem key="SEO & SEM">SEO & SEM</DropdownItem>
<DropdownItem key="Content Marketing">Content Marketing</DropdownItem>
<DropdownItem key="Social Media Marketing">Social Media Marketing</DropdownItem>
<DropdownItem key="Email Marketing">Email Marketing</DropdownItem>
<DropdownItem key="VFX (Visual Effects)">VFX (Visual Effects)</DropdownItem>
<DropdownItem key="Film Production">Film Production</DropdownItem>
<DropdownItem key="Graphic Design">Graphic Design</DropdownItem>
<DropdownItem key="Photography">Photography</DropdownItem>
<DropdownItem key="Video Editing">Video Editing</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      {/* <label className="font-semibold text-xs text-black-400">Location</label> */}
  
    </div>
    


              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className='bg-amber-400 dark:text-black'  onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
