import "./App.css";

import { Footer } from "./layout/Footer";
import { Container } from "./layout/Container";
import { Header } from "./layout/Header";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@heroui/react";

import { Outlet, useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Header>
        <h1 className="mt-12 scale-85 font-medium">
          {import.meta.env.VITE_HEADER_TITLE_RESTAURANT}
        </h1>
      </Header>
      <Container>
        <Outlet />
      </Container>
      <Footer>
        <div className="flex items-center justify-between w-[255px] h-16 rounded-2xl border-[#E5E7EB] border-2 bg-white">
          <Drawer
            backdrop="blur"
            size="5xl"
            isOpen={isOpen}
            placement={'bottom'}
            onOpenChange={onOpenChange}
          >
            <DrawerContent className="h-[90%] py-4 bg-[#FCFBFB] text-[#202020] border-2 rounded-2xl border-[#E5E7EB]">
              {(onClose) => (
                <>
                  <DrawerHeader className="flex justify-center gap-1">
                    <Input
                    classNames={{
                      inputWrapper: [
                        'my-6',
                        'border-[#CBCBCB]',
                        'border-2',
                        'rounded-[10px]',
                        'p-6',
                        'shadow-none',
                        'bg-[#F8F8F8]'
                      ] 
                    }}
                    placeholder="Search"></Input>
                  </DrawerHeader>
                  <DrawerBody>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod.
                    </p>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button onPress={onClose}>
                      Close
                    </Button>
                  </DrawerFooter>
                </>
              )}
            </DrawerContent>
          </Drawer>
          <Button onPress={onOpen} disableRipple>
            <i className="flex items-center fi fi-br-search scale-200"></i>
          </Button>
          <Popover
            className="
          flex items-center
          rounded-2xl h-[104px] w-[90vw]
          max-w-full
          bg-white drop-shadow-[0_-6px_18.8px_rgba(0,0,0,0.2)]
          overflow-x-scroll p-1"
            backdrop="blur"
            placement="top"
            offset={25}
          >
            <PopoverTrigger>
              <Button>
                <i className="flex items-center fi fi-br-menu-burger scale-200"></i>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <div className="flex items-center justify-between w-full">
                {Array.from({ length: 10 }).map((_, idx) => (
                  <Button key={idx} disableRipple className="flex m-5 p-1">
                    Pizza
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Button onPress={() => navigate("/greet")} disableRipple>
            <i className="flex items-center fi fi-rs-holding-hand-dinner scale-200"></i>
          </Button>
        </div>
      </Footer>
    </>
  );
}

export default App;
