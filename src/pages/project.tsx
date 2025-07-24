import gsap from "gsap"
import { Button } from "../components/button"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const middleBorderRef = useRef<HTMLDivElement | null>(null);
  const topBorderRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const headingRef = useRef<HTMLImageElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      middleBorderRef.current,
      {
        scaleY: 0,
        transformOrigin: "center center"
      },
      {
        scaleY: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.to(topBorderRef.current, {
      width: '100%',
      duration: 2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        
      }
    })

    gsap.set(imgRef.current, { marginTop: '5rem' })
    gsap.to(imgRef.current, {
      marginTop: '0',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'top 30%',
        scrub: 2,
      }
    })
    
    gsap.fromTo([headingRef.current, paraRef.current, btnRef.current], {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5, 
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    })
  }, [])

  return (
    <div
      className="min-h-screen w-full bg-[#F2F0E9] grid grid-cols-1 lg:grid-cols-2 relative border-b"
      ref={containerRef}
    >

      <div className="top-border w-0 border-t absolute top-0 left-0" ref={topBorderRef}></div>

      {/* Left Content */}
      <div className="w-full h-full relative flex items-center justify-center px-6 py-10">
        <div className="middle-border absolute top-0 right-0 h-full border-r" ref={middleBorderRef}></div>


        <div className="w-full max-w-[90%] md:max-w-[70%] flex flex-col gap-4 items-start text-start">
          <h3 className="text-xs sm:text-sm tracking-widest"
            ref={ headingRef }
          >
            GET TO KNOW THE PROJECT
          </h3>
          <p ref={ paraRef } className="text-base sm:text-xl md:text-2xl lg:text-4xl font-extralight leading-relaxed --font-romie">
            <span className="italic">Our Philosophy </span>
            is part to understand <br />
            the journey as an opportunity to <br />
            immerse ourselves in the local environment and understand  <br />
            other ways of living life without prejudice.
          </p>

          <Button
            ref={ btnRef }
            text="Learn More"
            className="mt-6 bg-[#F2F0E9] font-extralight border border-black px-6 py-2 uppercase"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-full overflow-hidden">
        <img
          src="/car.avif"
          alt="img"
          className="w-full h-full object-cover"
          ref={imgRef}
        />
      </div>
    </div>

  )
}

export default Project
