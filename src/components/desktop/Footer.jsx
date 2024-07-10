const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div className="pt-[5vw]">
            <div className="pl-[7vw] ">
              <div className="h-[4px] w-[5vw] bg-white "></div>
            </div>
            <div className="pl-[7vw]  text-white mt-[1vw] ">
              <h3 className="leading-[2.5vw] font-bold text-[1.3vw]">
                My Account
              </h3>
              <h3 className="leading-[2.5vw]">Overview</h3>
              <h3 className="leading-[2.5vw]">Order History</h3>
              <h3 className="leading-[2.5vw]">Wishlist</h3>
              <h3 className="leading-[2.5vw]">Account Information</h3>
            </div>
          </div>
          <div className="pt-[5vw]">
            <div className="pl-[7vw] pr-[7vw] ">
              <div className="h-[4px] w-[5vw] bg-white "></div>
            </div>
            <div className="pl-[7vw] pr-[7vw] text-white mt-[1vw] ">
              <h3 className="leading-[2.5vw] font-bold text-[1.3vw]">Store</h3>
              <h3 className="leading-[2.5vw]">Security Notice</h3>
              <h3 className="leading-[2.5vw]">Location & Hours</h3>
              <h3 className="leading-[2.5vw]">Rentals</h3>
              <h3 className="leading-[2.5vw]">Privacy Notice</h3>
            </div>
          </div>
        </div>
        <div className="pr-[4.5vw] mt-[12vw]">
          <img src="/src/assets/logo.png" alt="Logo" />
          <div className="flex gap-[1vw] mt-[2vw] justify-end">
            <img src="/src/assets/Vector1.png" alt="" />
            <img src="/src/assets/Vector2.png" alt="" />
            <img src="/src/assets/Vector3.png" alt="" />
            <img src="/src/assets/Vector4.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
