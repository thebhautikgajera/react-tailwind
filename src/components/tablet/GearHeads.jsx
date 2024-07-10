const GearHeads = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="h-[3px] mt-[7vw] w-[9vw] bg-[#ab0433]"></div>
      </div>
      <h2 className="text-center text-[5vw] mt-[1vw] font-[700]">Gear Heads</h2>
      <div className="flex justify-between px-[5vw] mt-[4vw]">
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-[#252525] text-white shadow-lg">
          <img
            src="/src/assets/tabGH1.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[2.2vw] pb-[3vw]">
            <h3 className="font-bold text-[3vw]">Article Title</h3>
            <h3 className="mt-[1vw] text-[2vw]">Article Subhead</h3>
          </div>
        </div>
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-white shadow-lg">
          <img
            src="/src/assets/tabGH2.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[2.2vw] pb-[3vw]">
            <h3 className="font-bold text-[3vw]">Article Title</h3>
            <h3 className="mt-[1vw] text-[2vw]">Article Subhead</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[5vw] mt-[4vw]">
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-white shadow-lg">
          <img
            src="/src/assets/tabGH3.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[2.2vw] pb-[3vw]">
            <h3 className="font-bold text-[3vw]">Article Title</h3>
            <h3 className="mt-[1vw] text-[2vw]">Article Subhead</h3>
          </div>
        </div>
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-[#252525] text-white shadow-lg">
          <img
            src="/src/assets/tabGH4.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[2.2vw] pb-[3vw]">
            <h3 className="font-bold text-[3vw]">Article Title</h3>
            <h3 className="mt-[1vw] text-[2vw]">Article Subhead</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default GearHeads;
