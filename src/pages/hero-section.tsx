import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgImgContainerRef = useRef<HTMLDivElement | null>(null);
  const bgColorContainerRef = useRef<HTMLDivElement | null>(null);
  const tierraImgDivRef = useRef<HTMLDivElement | null>(null);
  const ignotaImgDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      bgColorContainerRef.current,
      { backgroundColor: '#18181b ' },
      { backgroundColor: 'transparent', duration: 1, delay: 2 }
    );
    gsap.to(bgImgContainerRef.current, {
      scale: 1.2,
      duration: .00001,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 2,
      }
    });
    gsap.fromTo(tierraImgDivRef.current, {
      yPercent: 120
    }, { yPercent: 0, delay: .7 })
    gsap.fromTo(ignotaImgDivRef.current, {
      yPercent: 120
    }, { yPercent: 0, delay: .8 })
  }, []);


  return (
    <div className="w-full h-screen sticky top-0 left-0 -z-50 overflow-hidden "
      ref={containerRef}
    >
      <div className="relative h-full w-full bg-zinc-900"
        ref={bgColorContainerRef}
      >
        <div
          id="img-container"
          className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden"
          ref={bgImgContainerRef}
        >
          <img
            src="/honey-hunters.jpeg"
            alt="img"
            className="absolute top-0 left-0 h-full w-full min-w-[50%] object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full place-content-center place-items-center p-6
          md:flex justify-between"
        >
          <div id="tierra-img" className="w-[50%] overflow-hidden"
            ref={tierraImgDivRef}
          >
            <img src="/tierra-svg.svg" alt="img" className="w-full h-full object-cover"/>
          </div>
          <div id="ignota-img" className="w-[50%] overflow-hidden"
            ref={ignotaImgDivRef}
          >
            <img src="/ignota-svg.svg" alt="img" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
