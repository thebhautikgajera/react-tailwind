const MidPage1 = () => {
  return (
    <>
    <div
            className="absolute z-[100] w-[100%] rounded-[3vw] text-white top-[80%] bg-no-repeat bg-fit bg-center p-[2vw] text-center sm:hidden md:hidden" style={{ backgroundImage: "url(/src/assets/Mobile.png)" }}>
            <h1 className="text-[3vw] font-[700]">FREE GUITAR LESSONS!</h1>
            <h2 className="text-[1.2vw] font-[700]">Purchase any guitar over $499.99 and receive <br /> one-hour guitar lesson
                free. </h2>
            <button className="bg-[#FF753A] text-white px-[2vw] rounded-[3vw] py-[1vw] mt-[1vw]">Learn More</button>
        </div>
    </>
  )
}

export default MidPage1