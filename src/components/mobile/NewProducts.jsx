const NewProducts = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-[5px] w-[20vw] bg-[#ab0433] "></div>
      </div>
      <h2 className="text-center text-[7vw] font-[700]">New Products</h2>
      <div className="grid gap-[8vw]">
        <div className="rounded-xl shadow-lg pb-[4vw]">
          <img src="/src/assets/mob-page2-img1.png" alt="Guitar Image" />
          <div className="flex justify-between font-bold text-xl px-[5vw] pt-[4vw]">
            <h1>Brand Name</h1>
            <h1>$2,995</h1>
          </div>
          <p className="font-semibold text-gray-600 px-[5vw] pt-[2vw]">
            Product description here
          </p>
          <div className="flex items-center gap-[1.4vw] border px-[2vw] mt-[4vw] mx-[5vw] w-fit rounded-xl">
            <h1 className="font-bold">0</h1>
            <p className="font-light text-sm">colors available</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg pb-[4vw]">
          <img src="/src/assets/mob-page2-img2.png" alt="Guitar Image" />
          <div className="flex justify-between font-bold text-xl px-[5vw] pt-[4vw]">
            <h1>Brand Name</h1>
            <h1>$2,995</h1>
          </div>
          <p className="font-semibold text-gray-600 px-[5vw] pt-[2vw]">
            Product description here
          </p>
          <div className="flex items-center gap-[1.4vw] border px-[2vw] mt-[4vw] mx-[5vw] w-fit rounded-xl">
            <h1 className="font-bold">0</h1>
            <p className="font-light text-sm">colors available</p>
          </div>
        </div>
        <div className="rounded-xl shadow-lg pb-[4vw]">
          <img src="/src/assets/mob-page2-img3.png" alt="Guitar Image" />
          <div className="flex justify-between font-bold text-xl px-[5vw] pt-[4vw]">
            <h1>Brand Name</h1>
            <h1>$2,995</h1>
          </div>
          <p className="font-semibold text-gray-600 px-[5vw] pt-[2vw]">
            Product description here
          </p>
          <div className="flex items-center gap-[1.4vw] border px-[2vw] mt-[4vw] mx-[5vw] w-fit rounded-xl">
            <h1 className="font-bold">0</h1>
            <p className="font-light text-sm">colors available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
