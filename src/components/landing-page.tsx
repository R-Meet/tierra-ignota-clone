import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type LandingPageProp = {
  bgImg: string,
  imgLeft: string,
  imgRight: string,
  height?: string
}

const LandingPage = ({ bgImg, imgLeft, imgRight, height }: LandingPageProp) => {

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
    <div className={`w-full sticky top-0 left-0 -z-50 overflow-hidden ${height || 'h-screen'}`}
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
            // src="/honey-hunters.jpeg"
            // src={`${import.meta.env.BASE_URL}honey-hunters.jpeg`} 
            src={ bgImg }
            alt="img"
            className="absolute top-0 left-0 h-full w-full min-w-[50%] object-cover"
          />
        </div>

        {/* <div className="absolute bottom-0 left-0 z-10 w-full place-content-center place-items-center p-6
          md:flex md:flex-row flex-col justify-between"
        >
          <div id="tierra-img" className=" w-[70%] md:w-[50%] overflow-hidden"
            ref={tierraImgDivRef}
          >
            <img 
              // src="/tierra-svg.svg" 
              // src={`${import.meta.env.BASE_URL}tierra-svg.svg`} 
              src={ imgLeft }
              alt="img" 
              className="w-full h-full object-cover"
            />
          </div>
          <div id="ignota-img" className=" w-[70%] md:w-[50%] overflow-hidden"
            ref={ignotaImgDivRef}
          >
            <img 
              // src="/ignota-svg.svg" 
              // src={`${import.meta.env.BASE_URL}ignota-svg.svg`} 
              src={ imgRight }
              alt="img" 
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
        <div className="absolute bottom-0 left-0 z-10 w-full flex flex-wrap justify-center items-end gap-4 p-4 md:justify-between">
          <div
            id="tierra-img"
            className="w-full sm:w-[45%]  overflow-hidden"
            ref={tierraImgDivRef}
          >
            <img
              src={imgLeft}
              alt="img"
              className="w-full h-full object-contain"
            />
          </div>

          <div
            id="ignota-img"
            className="w-full sm:w-[45%]  overflow-hidden"
            ref={ignotaImgDivRef}
          >
            <img
              src={imgRight}
              alt="img"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
