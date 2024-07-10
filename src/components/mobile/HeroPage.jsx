const HeroPage = () => {
  return (
    <>
      <nav className="px-[7vw] py-[6vw]">
        <div className="flex justify-between items-center px-[4vw] py-[5vw] rounded-[4vw] text-white backdrop-blur-[30px] shadow-[0px_0px_30px_rgba(227,228,237,0.37)] border-[1.5px] border-[rgba(255,255,255,0.18)]">
          <img src="/src/assets/mob-logo.png" alt="" />
          <i className="ri-menu-line text-2xl"></i>
        </div>
      </nav>
      <h1 className="text-4xl text-white font-bold pb-[60vw] pt-[18vw]">
        Fullfilling <br />
        dreams with <br />
        strings attached
      </h1>
      <div
        className="absolute z-[100] bg-center bg-cover bg-mo-repeat h-auto w-[90%] text-center text-white top-[84%] left-[5%] rounded-xl md:hidden lg:hidden"
        style={{ backgroundImage: "url(/src/assets/mob-part.png)" }}
      >
        <h1 className="text-2xl font-bold pt-[4vw] ">
          FREE GUITAR <br /> LESSONS!
        </h1>
        <p className="text-xs font-semibold pt-[2vw]">
          Purchase any guitar over $499.99 and receive <br />a one-hour guitar
          lesson free.
        </p>
        <button className="uppercase bg-orange-500 px-[4vw] py-[1.8vw] my-[4vw] text-[3vw] font-semibold rounded-3xl">
          learn more
        </button>
      </div>
    </>
  );
};

export default HeroPage;
