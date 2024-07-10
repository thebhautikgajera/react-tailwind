const NewProducts = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-[3px] w-[5vw] bg-[#ab0433]"></div>
      </div>
      <h2 className="text-center text-[3vw] font-[700]">New Products</h2>
      <div className="flex justify-between px-[7vw] mt-[4vw]">
        <div className="">
          <div className="h-[27vw] w-[25vw] border rounded-[1vw] bg-white shadow-lg">
            <img
              src="/src/assets/guiter1.png"
              className="object-cover object-center"
              alt="Guitar Image"
            />
            <div className="flex justify-between px-[2vw] pt-[1vw] pb-[0.5vw] font-bold">
              <h3>Brand Name</h3>
              <h3>$2,995</h3>
            </div>
            <h4 className="font-normal text-[rgb(109,108,108)] px-[2vw] pb-[1vw]">
              Product description here
            </h4>
            <div className="flex gap-[1vw] items-center px-[2vw] py-[1vw]">
              <h4 className="">
                <span className="font-bold">0</span> colors available
              </h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[27vw] w-[25vw] border rounded-[1vw] bg-white shadow-lg">
            <img
              src="/src/assets/guiter2.png"
              className="object-cover object-center"
              alt="Guitar Image"
            />
            <div className="flex justify-between px-[2vw] pt-[1vw] pb-[0.5vw] font-bold">
              <h3>Brand Name</h3>
              <h3>$2,995</h3>
            </div>
            <h4 className="font-normal text-[rgb(109,108,108)] px-[2vw] pb-[1vw]">
              Product description here
            </h4>
            <div className="flex gap-[1vw] items-center px-[2vw] py-[1vw]">
              <h4 className="">
                <span className="font-bold">0</span> colors available
              </h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[27vw] w-[25vw] border rounded-[1vw] bg-white shadow-lg">
            <img
              src="/src/assets/guiter3.png"
              className="object-cover object-center"
              alt="Guitar Image"
            />
            <div className="flex justify-between px-[2vw] pt-[1vw] pb-[0.5vw] font-bold">
              <h3>Brand Name</h3>
              <h3>$2,995</h3>
            </div>
            <h4 className="font-normal text-[rgb(109,108,108)] px-[2vw] pb-[1vw]">
              Product description here
            </h4>
            <div className="flex gap-[1vw] items-center px-[2vw] py-[1vw]">
              <h4 className="">
                <span className="font-bold">0</span> colors available
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
