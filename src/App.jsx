import {
  Hero, TabHero, MobHero, MidPage1,
  NewProducts, TabNewProducts, MobNewProducts,
  PopularFinds, TabPopularFinds, MobPopularFinds,
  GearHeads, TabGearHeads, MobGearHeads,
  Footer, TabFooter, MobFooter,
  Copyright, TabCopyright, MobCopyright,
} from "./components";

const App = () => (
  <>
    <main>
      {/* page-1 desktop screen */}
      <section
        className="h-screen relative z-[99] w-full bg-no-repeat bg-cover bg-center sm:hidden md:hidden "
        style={{ backgroundImage: "url(/src/assets/page1.png)" }}
      >
        <Hero />
      </section>

      {/* page-1 tablet screen */}
      <section
        className="h-screen relative z-[99] w-full bg-no-repeat bg-cover bg-center sm:hidden lg:hidden "
        style={{ backgroundImage: "url(/src/assets/tabBG.png)" }}
      >
        <TabHero />
      </section>

      {/* page-1 mobile screen */}
      <section
        className="w-full h-auto relative z-[99] bg-no-repeat bg-center bg-cover text-center md:hidden lg:hidden "
        style={{ backgroundImage: "url(/src/assets/mob-bg.png)" }}
      >
        <MobHero />
      </section>

      {/* mid desktop screen */}
      <MidPage1 />

      {/* page-2 desktop screen */}
      <section
        className="mt-[12vw] h-[42vw] w-full sm:hidden md:hidden "
      >
        <NewProducts />
      </section>

      {/* page-2 tablet screen */}
      <section
        className="mt-[17vw] w-full sm:hidden lg:hidden"
      >
        <TabNewProducts />
      </section>

      {/* page-2 mobile screen */}
      <section
        className="mt-[40vw] flex items-center flex-col w-full h-auto py-[10vw] md:hidden lg:hidden"
      >
        <MobNewProducts />
      </section>

      {/* page-3 desktop screen */}
      <section
        className="h-[47vw] w-full  bg-[#ECECEC] sm:hidden md:hidden "
      >
        <PopularFinds />
      </section>

      {/* page-3 tablet screen */}
      <section
        className="w-full pb-[8vw] mt-[8vw] bg-[#ECECEC] sm:hidden lg:hidden"
      >
        <TabPopularFinds />
      </section>

      {/* page-3 mobile screen */}
      <section
        className="w-full h-auto md:hidden lg:hidden bg-[#ECECEC] flex items-center flex-col py-[10vw]"
      >
        <MobPopularFinds />
      </section>

      {/* page-4 desktop screen */}
      <section
        className="h-[80vw] w-full sm:hidden md:hidden "
      >
        <GearHeads />
      </section>

      {/* page-4 tablet screen */}
      <section
        className="w-full sm:hidden lg:hidden"
      >
        <TabGearHeads />
      </section>

      {/* page-4 mobile screen */}
      <section
        className="w-full h-auto md:hidden lg:hidden flex items-center flex-col py-[10vw]"
      >
        <MobGearHeads />
      </section>

      {/* Footer desktop screen */}
      <footer
        className="h-[22vw] w-full mt-[15vw] bg-[#505050] sm:hidden md:hidden "
      >
        <Footer />
      </footer>

      {/* Footer tablet screen */}
      <footer
        className="h-[auto] w-full mt-[7vw] pb-[5vw] bg-[#505050] sm:hidden lg:hidden"
      >
        <TabFooter />
      </footer>

      {/* Footer mobile screen */}
      <footer
        className="w-full h-auto bg-[#505050] flex flex-col items-center gap-[2.5vw] text-white text-center md:hidden lg:hidden"
      >
        <MobFooter />
      </footer>

      {/* Copyright desktop screen */}
      <div
        className="bg-[#252525] h-[3vw] w-full pl-[7vw] text-white flex items-center text-[1.2vw] sm:hidden md:hidden"
      >
        <Copyright />
      </div>

      {/* Copyright tablet screen */}
      <div
        className="bg-[#252525] h-[7vw] w-full pl-[7vw] text-white flex items-center text-[2.3vw] sm:hidden lg:hidden"
      >
        <TabCopyright />
      </div>

      {/* Copyright mobile screen */}
      <div
        className="text-sm bg-[#252525] py-[2.2vw] text-center text-white inline-block w-full md:hidden lg:hidden"
      >
        <MobCopyright />
      </div>

    </main>
  </>
);

export default App;
