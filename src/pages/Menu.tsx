export const Menu: React.FC = () => {
  return (
    <>
      <div className="w-fit overflow-x-scroll flex justify-between items-center">
        {
          Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="mr-2 w-[260px] h-[148px] bg-amber-100 rounded-2xl">
              <h1>JARNAMA</h1>
            </div>
          ))
        }
      </div>
      <h1 className="text-2xl text-left">Menu</h1>
      {
        Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores dolorem explicabo blanditiis eos voluptatibus libero corrupti reiciendis architecto molestias! Nobis, ea. Aspernatur illum laboriosam, a quia molestiae deleniti consequatur.
          </div>
        ))
      }
    </>
  )
}