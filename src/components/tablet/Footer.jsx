const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex ">
          <div className="pt-[5vw]">
            <div className="pl-[7vw] ">
              <div className="h-[4px] w-[7vw] bg-white "></div>
            </div>
            <div className="pl-[7vw] text-white mt-[1vw] ">
              <h3 className="leading-[4vw] font-bold text-[2.5vw]">
                My Account
              </h3>
              <h3 className="leading-[4vw] text-[2vw]">Overview</h3>
              <h3 className="leading-[4vw] text-[2vw]">Order History</h3>
              <h3 className="leading-[4vw] text-[2vw]">Wishlist</h3>
              <h3 className="leading-[4vw] text-[2vw]">Account Information</h3>
            </div>
          </div>
          <div className="pt-[5vw]">
            <div className="pl-[7vw] ">
              <div className="h-[4px] w-[7vw] bg-white "></div>
            </div>
            <div className="pl-[7vw] text-white mt-[1vw] ">
              <h3 className="leading-[4vw] font-bold text-[2.5vw]">Store</h3>
              <h3 className="leading-[4vw] text-[2vw]">Security Notice</h3>
              <h3 className="leading-[4vw] text-[2vw]">Location & Hours</h3>
              <h3 className="leading-[4vw] text-[2vw]">Rentals</h3>
              <h3 className="leading-[4vw] text-[2vw]">Privacy Notice</h3>
            </div>
          </div>
        </div>
        <div className="pr-[4.5vw] flex flex-col-reverse items-end">
          <div className="flex gap-[1vw] mt-[3vw] mb-[2vw] justify-end">
            <img src="/src/assets/tabVector1.png" alt="" />
            <img src="/src/assets/tabVector2.png" alt="" />
            <img src="/src/assets/tabVector3.png" alt="" />
            <img src="/src/assets/tabVector4.png" alt="" />
          </div>
          <img src="/src/assets/tabLogo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
