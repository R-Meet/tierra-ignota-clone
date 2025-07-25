import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";
import { Button } from "./button";
gsap.registerPlugin(ScrollTrigger);

type ShowcaseWithImgProp = {
  title: string,
  subtitle: string,
  desc: string,
  btnText?: string,
  btnStyle?: string,
  img: string,
  info?: string,
  height?: string
}

const ShowcaseWithImg = ({ title, subtitle, desc, info, btnText, btnStyle, img, height }: ShowcaseWithImgProp) => {
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
      className={`${typeof height !=='undefined' ? 'h-[calc(100vh-3.3rem)]' : 'min-h-screen'} w-full overflow-hidden bg-[#F2F0E9] grid grid-cols-1 lg:grid-cols-2 relative border-b`}
      ref={containerRef}
    >

      <div className="top-border w-0 border-t absolute top-0 left-0" ref={topBorderRef}></div>

      {/* Left Content */}
      <div className="w-full h-full relative flex flex-col items-center justify-center px-6 py-10">
        <div className="middle-border absolute top-0 right-0 h-full border-r" ref={middleBorderRef}></div>


        <div className="w-full max-w-[90%] md:max-w-[70%] flex flex-col gap-[18rem] items-start text-start mb-[10rem]">
          <div>
            {title && <h3 className="text-xs sm:text-sm tracking-widest"
              ref={ headingRef }
            >
              {title}
            </h3>}
            <p ref={ paraRef } className="text-base sm:text-xl md:text-3xl  font-extralight leading-relaxed --font-romie">
              <span className="italic">{subtitle} </span>
              {desc}
              {/* is part to understand <br />
              the journey as an opportunity to <br />
              immerse ourselves in the local environment and understand  <br />
              other ways of living life without prejudice. */}
            </p>

            {btnText && <Button
              ref={ btnRef }
              text={btnText}
              className={`mt-6  font-extralight border border-black px-6 py-2 uppercase ${btnStyle}`}
            />}
          </div>

          {info && <p className="w-full text-sm  tracking-widest leading-relaxed uppercase">
            {info}
          </p>}
        </div>

      </div>

      {/* Right Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-full overflow-hidden">
        <img
          // src="/car.avif"
          src={img}
          alt="img"
          className="w-full h-full object-cover"
          ref={imgRef}
        />
      </div>
    </div>

  )
}

export { ShowcaseWithImg }
