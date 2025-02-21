import './App.css'
import {Button, Popover, PopoverContent, PopoverTrigger} from "@heroui/react";

function App() {

  return (
    <>
      <h1 className='underline'>SUUINSHI MENU APP</h1>
      <Popover placement="right">
        <PopoverTrigger>
          <Button className='underline'>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default App
