const HeroPage = () => {
  return (
    <>
      <nav className="w-full bg-transparent h-[5vw] p-[2vw]">
        <div className="flex justify-between px-[2.5vw] py-[1.5vw] rounded-[1vw] items-center backdrop-blur-[30px] shadow-[0px_0px_30px_rgba(227,228,237,0.37)] border-[1.5px] border-[rgba(255,255,255,0.18)]">
          <div className="flex items-center text-white gap-[2vw]">
            <img src="/src/assets/logo.png" alt="" />
            <h3 className="pt-[0.5vw] font-[700] text-[1.4vw]">Guitars</h3>
            <h3 className="pt-[0.5vw] font-[700] text-[1.4vw]">Accessories</h3>
            <h3 className="pt-[0.5vw] font-[700] text-[1.4vw]">Storage</h3>
            <h3 className="pt-[0.5vw] font-[700] text-[1.4vw]">Lessons</h3>
            <h3 className="pt-[0.5vw] font-[700] text-[1.4vw]">Repairs</h3>
          </div>
          <div className="flex items-center text-white text-[1.5vw] gap-[1.5vw]">
            <i className="ri-shopping-cart-line"></i>
            <i className="ri-user-line"></i>
          </div>
        </div>
      </nav>
      <div className="text-white text-[4vw] font-[700] mt-[4vw] p-[3.5vw]">
        <p>Fullfilling dreams <br/> with strings <br/> attached</p>
      </div>
    </>
  );
};

export default HeroPage;
