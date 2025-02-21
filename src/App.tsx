import "./App.css";
import { Footer } from "./layout/Footer";
import { Container } from "./layout/Container";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";

function App() {
  return (
    <>
      <Container>
        <Footer>
        <div className="flex items-center justify-between w-[255px] h-16 rounded-2xl border-[#E5E7EB] border-2 bg-white">
        <Button>
          <i className="flex items-center fi fi-br-search scale-200"></i>
        </Button>
          <Popover backdrop="blur" placement="top">
            <PopoverTrigger>
              <Button>
                <i className="flex items-center fi fi-br-menu-burger scale-200"></i>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
              </div>
            </PopoverContent>
          </Popover>
          <Button>
            <i className="flex items-center fi fi-rs-holding-hand-dinner scale-200"></i>
          </Button>
        </div>
        </Footer>
      </Container>
    </>
  );
}

export default App;
