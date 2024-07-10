const NewProducts = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-[3px] w-[9vw] bg-[#ab0433]"></div>
      </div>
      <h2 className="text-center text-[5vw] mt-[1vw] font-[700]">
        New Products
      </h2>
      <div className="flex justify-between px-[5vw] mt-[4vw]">
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-white shadow-lg">
          <img
            src="/src/assets/tabGuitar1.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="flex justify-between px-[3vw] pt-[1vw] pb-[0.5vw] font-bold">
            <h3>Brand Name</h3>
            <h3>$2,995</h3>
          </div>
          <h4 className="font-[500] text-[rgb(109,108,108)] px-[3vw] pt-[.5vw] pb-[2vw]">
            Product description here
          </h4>
          <div className="flex gap-[1vw] items-center px-[3vw] py-[1.5vw] mb-[1.5vw]">
            <h4 className="">
              <span className="font-bold">0</span> colors available
            </h4>
          </div>
        </div>
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-white shadow-lg">
          <img
            src="/src/assets/tabGuitar2.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="flex justify-between px-[3vw] pt-[1vw] pb-[0.5vw] font-bold">
            <h3>Brand Name</h3>
            <h3>$2,995</h3>
          </div>
          <h4 className="font-[500] text-[rgb(109,108,108)] px-[3vw] pt-[.5vw] pb-[2vw]">
            Product description here
          </h4>
          <div className="flex gap-[1vw] items-center px-[3vw] py-[1.5vw] mb-[1.5vw]">
            <h4 className="">
              <span className="font-bold">0</span> colors available
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[5vw] mt-[4vw]">
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-white shadow-lg">
          <img
            src="/src/assets/tabGuitar3.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="flex justify-between px-[3vw] pt-[1vw] pb-[0.5vw] font-bold">
            <h3>Brand Name</h3>
            <h3>$2,995</h3>
          </div>
          <h4 className="font-[500] text-[rgb(109,108,108)] px-[3vw] pt-[.5vw] pb-[2vw]">
            Product description here
          </h4>
          <div className="flex gap-[1vw] items-center px-[3vw] py-[1.5vw] mb-[1.5vw]">
            <h4 className="">
              <span className="font-bold">0</span> colors available
            </h4>
          </div>
        </div>
        <div className="h-auto w-[40vw] border rounded-[1vw] bg-white shadow-lg">
          <img
            src="/src/assets/tabGuitar4.png"
            height="100%"
            width="100%"
            className="object-cover object-center"
            alt="Guiter Image"
          />
          <div className="flex justify-between px-[3vw] pt-[1vw] pb-[0.5vw] font-bold">
            <h3>Brand Name</h3>
            <h3>$2,995</h3>
          </div>
          <h4 className="font-[500] text-[rgb(109,108,108)] px-[3vw] pt-[.5vw] pb-[2vw]">
            Product description here
          </h4>
          <div className="flex gap-[1vw] items-center px-[3vw] py-[1.5vw] mb-[1.5vw]">
            <h4 className="">
              <span className="font-bold">0</span> colors available
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
