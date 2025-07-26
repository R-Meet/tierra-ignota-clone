import { Navbar } from "../../components/navbar"
import ProximaPill from "../../components/proxima-pill"
import { pillData } from "../hero-pages/proximas-page"

const ExpenditionsHero = () => {
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F2F0E9]">
        {/* Sidebar (filters) */}
        <div className="w-full lg:w-[16.666%] border-b lg:border-r border-black">
          <div className="w-full px-5 py-4 lg:p-5 lg:sticky lg:top-14 flex flex-row lg:flex-col gap-3">
            <button className="w-full border border-black rounded-3xl bg-[#191919] text-xs text-white --font-romie tracking-widest py-3 px-4 relative overflow-hidden cursor-pointer font-semibold
              before:absolute before:bottom-0 before:left-0 before:h-0 before:content-[''] before:w-full 
              hover:before:h-full before:transition-all before:duration-200 before:-z-10 z-10 transition-colors duration-200">
              See All
            </button>

            <button className="w-full border border-black rounded-3xl text-xs text-black --font-romie tracking-widest py-3 px-4 relative overflow-hidden cursor-pointer font-semibold
              before:absolute before:bottom-0 before:left-0 before:h-0 before:content-[''] before:w-full before:bg-[#A1C983]
              hover:before:h-full before:transition-all before:duration-200 before:-z-10 z-10 transition-colors duration-200">
              Available
            </button>

            <button className="w-full border border-black rounded-3xl text-xs text-black --font-romie tracking-widest py-3 px-4 relative overflow-hidden cursor-pointer font-semibold
              before:absolute before:bottom-0 before:left-0 before:h-0 before:content-[''] before:w-full before:bg-[#F2DE7E]
              hover:before:h-full before:transition-all before:duration-200 before:-z-10 z-10 transition-colors duration-200">
              Last Place Available
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {pillData.map((pill, index) => (
              <ProximaPill
                key={index}
                img={pill.img}
                title={pill.title}
                date={pill.date}
                info={pill.info}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpenditionsHero;
