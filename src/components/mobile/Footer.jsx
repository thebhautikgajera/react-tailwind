const Footer = () => {
  return (
    <>
      <div className="w-[20vw] h-[4px] bg-white mt-[8vw]"></div>
      <h1 className="font-bold">My Account</h1>
      <h1>Overview</h1>
      <h1>Order History</h1>
      <h1>Whishlist</h1>
      <h1>Account Information</h1>
      <div className="flex gap-[3vw] items-center my-[3vw]">
        <img src="/cdn/mobV1.png" alt="" />
        <img src="/cdn/mobV2.png" alt="" />
        <img src="/cdn/mobV3.png" alt="" />
        <img src="/cdn/mobV4.png" alt="" />
      </div>
    </>
  );
};

export default Footer;
