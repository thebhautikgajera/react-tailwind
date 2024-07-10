const GearHeads = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="h-[3px] mt-[5vw] w-[5vw] bg-[#ab0433] "></div>
      </div>
      <h2 className="text-center text-[3vw] font-[700]">Gear Heads</h2>
      <div className="pl-[7vw] pr-[7vw] mt-[3vw] flex justify-between gap-[3vw]">
        <div className="h-[37vw] w-[36vw] border-[2px] rounded-[0.7vw] bg-[#252525] text-[white] shadow-2xl">
          <img
            src="/src/assets/GH1.png"
            className="object-cover object-center"
            height="487px"
            width="616px"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[2.2vw] ">
            <h3 className="font-bold text-[1.7vw]">Article Title</h3>
            <h3 className="mt-[.7vw]">Article Subhead</h3>
          </div>
        </div>
        <div className="h-[37vw] w-[36vw] border-[2px] rounded-[0.7vw] bg-[#ECECEC]  shadow-2xl">
          <img
            src="/src/assets/GH2.png"
            className="object-cover object-center"
            height="487px"
            width="616px"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[2.2vw] ">
            <h3 className="font-bold text-[1.7vw]">Article Title</h3>
            <h3 className="mt-[.7vw]">Article Subhead</h3>
          </div>
        </div>
      </div>
      <div className="pl-[7vw] pr-[7vw] mt-[3vw] flex justify-between">
        <div className="h-[36vw] w-[23.6vw] border-[2px] rounded-[0.85vw] bg-[#252525] text-[white] shadow-2xl">
          <img
            src="/src/assets/GH3.png"
            className="object-cover object-center"
            height="480px"
            width="400px"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[1.5vw] ">
            <h3 className="font-bold text-[1.7vw]">Article Title</h3>
            <h3 className="mt-[.7vw]">Article Subhead</h3>
          </div>
        </div>
        <div className="h-[36vw] w-[23.6vw] border-[2px] rounded-[0.85vw] bg-[#ECECEC] shadow-2xl">
          <img
            src="/src/assets/GH4.png"
            className="object-cover object-center"
            height="480px"
            width="400px"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[1.5vw] ">
            <h3 className="font-bold text-[1.7vw]">Article Title</h3>
            <h3 className="mt-[.7vw]">Article Subhead</h3>
          </div>
        </div>
        <div className="h-[36vw] w-[23.6vw] border-[2px] rounded-[0.85vw] bg-[#252525] text-[white] shadow-2xl">
          <img
            src="/src/assets/GH5.png"
            className="object-cover object-center"
            height="480px"
            width="400px"
            alt="Guiter Image"
          />
          <div className="px-[2vw] pt-[1.5vw] ">
            <h3 className="font-bold text-[1.7vw]">Article Title</h3>
            <h3 className="mt-[.7vw]">Article Subhead</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default GearHeads;
