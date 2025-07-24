import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const Slogan = () => {

  const sloganContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(sloganContainerRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: .6,
      scrollTrigger: {
        trigger: sloganContainerRef.current,
        start: 'top 90%',
      }
    })
  }, [])

  return (
    <div className="w-full h-screen bg-[#F2F0E9]  --font-romie
      text-3xl md:text-8xl lg:9xl flex flex-col gap-5 items-center justify-center text-center
    " >
      <div ref={sloganContainerRef}>
        <p>
          <span className="text-[#B2ABEF] italic border-b border-black cursor-pointer hover:text-black transition duration-700">We organize</span>
          <span> expeditions</span>
        </p>
        <p>
          <span>immersive a </span>
          <span className="text-[#B2ABEF] italic border-b border-black cursor-pointer hover:text-black transition duration-700">places</span>
          <span> remote</span>
        </p>
      </div>
      <div className="w-15 h-15 border border-black rounded-full mt-8 hover:bg-[#D8EABE] cursor-pointer place-items-center place-content-center overflow-hidden ">
        <img src="/arrow.svg" alt="arrow"
          className="w-7 h-7 rotate-90 arrow-animation "
        />
      </div>
    </div>
  )
}

export default Slogan
