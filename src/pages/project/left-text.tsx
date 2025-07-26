import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const LeftText = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const middleBorderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    gsap.to(middleBorderRef.current, {
      height: '100%',
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%'
      }
    });

  }, [])

return (
  <div className="w-full h-[60vh] md:h-[50vh] "
    ref={containerRef}
  > 
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-[#F2F0E9] relative">
      <div
        className="relative --font-romie flex flex-col items-center justify-center gap-6 text-sm sm:text-base md:text-lg leading-relaxed font-medium tracking-wide p-4 sm:p-6 md:p-8 h-full"
      >
        <div ref={middleBorderRef} className='h-0 absolute top-0 right-0 border-r' />
        <p className="max-w-2xl text-center md:text-left">
          In a world where the traditions and customs of hundreds of tribal societies are on the verge of disappearing, we see the need to focus on the value of cultural diversity.
        </p>
        <p className="max-w-2xl text-center md:text-left">
          This is how Tierra Ignota was born, a tourism initiative that organizes immersive expeditions to remote locations, aimed at small groups of adventurers eager to learn about minority societies and ancestral ceremonies.
        </p>
      </div>

      <div className="relative w-full h-full hidden md:block">
        {/* <div className="middle-border absolute top-0 left-0 h-0 border-r" ref={middleBorderRef} /> */}
      </div>
    </div>
  </div>
)

}

export default LeftText
