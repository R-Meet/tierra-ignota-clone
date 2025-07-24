import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

interface ProximaPillProp {
  img: string;
  title: string;
  date: string;
  info: string
}

const ProximaPill = ({ img, title, date, info }: ProximaPillProp) => {

  const pillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(pillRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: pillRef.current,
        start: 'top 95%',
      }
    })
  }, [])

  return (
    <div className="h-screen w-full  rounded-2xl overflow-hidden group --font-romie"
      ref={pillRef}
    >
      <div className="w-full h-full relative">
        <div className="w-full h-full absolute z-20 top-0 left-0 group-hover:scale-110 transition-transform duration-200">
          <img src={ img } alt="img"
            className="w-full h-full object-cover brightness-75 opacity-95"
          />
        </div>
        <div className="group w-full absolute bottom-0 left-0 z-20 flex flex-col gap-2 text-white p-3">
          <div className="border-b border-b-white pb-5 transition-all duration-500 ease-in-out overflow-hidden">
            <h1 className="text-4xl md:text-6xl transition-all duration-500 ease-in-out">{title}</h1>
            
            <p className="md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden text-xl">
              {info}
            </p>
          </div>
          
          <p>{date}</p>
        </div>

      </div>
    </div>
  )
}

export default ProximaPill
