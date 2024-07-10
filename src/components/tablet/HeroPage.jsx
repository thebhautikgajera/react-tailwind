const HeroPage = () => {
  return (
    <>
      <nav className="w-full bg-transparent h-[5vw] p-[5vw] ">
        <div className="px-[2.5vw] py-[2.5vw] rounded-[3vw] items-center backdrop-blur-[30px] shadow-[0px_0px_30px_rgba(227,228,237,0.37)] border-[1.5px] border-[rgba(255,255,255,0.18)]">
          <div className="flex items-center justify-between text-white gap-[20vw]">
            <img src="/src/assets/tabLogo.png" alt="" />
            <i className="ri-menu-line text-[5vw]"></i>
          </div>
        </div>
      </nav>
      <div className="text-white text-[8vw] font-[700] flex items-center mt-[40vw] pl-[5vw]">
        <p>
          Fullfilling <br /> dreams with <br /> strings attached
        </p>
      </div>

      <div
        className="absolute z-[100] bg-center bg-cover bg-mo-repeat h-auto w-[96%] text-center text-white top-[91.5%] left-[2%] px-[5vw] rounded-xl sm:hidden lg:hidden"
        style={{ backgroundImage: "url(/src/assets/tab-part.png)" }}
      >
        <h1 className="text-[3.5vw] font-bold mt-[2vw]">
          FREE GUITAR LESSONS!
        </h1>
        <p className="text-[1.8vw] font-semibold mt-[2vw]">
          Purchase any guitar over $499.99 and receive <br />a one-hour guitar
          lesson free.
        </p>
        <button className="uppercase bg-[#FF753A] text-[2vw] rounded-[3vw] mt-[2vw] mb-[2vw] font-semibold py-[1vw] px-[2vw]">
          learn more
        </button>
      </div>
    </>
  );
};

export default HeroPage;
