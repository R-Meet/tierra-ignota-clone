import { useEffect, useRef } from "react";
import ProximaPill from "../components/proxima-pill";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../components/button";
gsap.registerPlugin(ScrollTrigger);

const pillData = [
  {
    img: `$${import.meta.env.BASE_URL}couple.jpeg`,
    title: 'Indonesia',
    info: 'Minangkabau and coexistence with the Mentawai tribe',
    date: '07 / 17 de agosto, 2025',
  },
  {
    img: `$${import.meta.env.BASE_URL}girl.jpeg`,
    title: 'Indonesia',
    info: 'Funeral rites of the Toraja',
    date: '18 / 25 agosto, 2025',
  },
  {
    img: `$${import.meta.env.BASE_URL}honey-hunters.jpeg`,
    title: 'Nepal',
    info: 'Honey hunters in the Himalayan mountains',
    date: '10 / 19 octubre, 2025',
  },
  {
    img: `$${import.meta.env.BASE_URL}trees.jpg`,
    title: 'Yemen',
    info: 'Socotra, the island at the end of the world',
    date: '16 / 23 noviembre, 2025',
  },
  {
    img: `$${import.meta.env.BASE_URL}hot-sand.jpg`,
    title: 'Colombia',
    info: 'Prospective expedition to the Tikuna territory',
    date: '04 / 16 de Diciembre, 2025',
  },
  {
    img: `$${import.meta.env.BASE_URL}cold-man.jpg`,
    title: 'Siberia',
    date: '05 / 11 diciembre, 2025',
    info: 'Tundra Nomads',
  },
  {
    img: `$${import.meta.env.BASE_URL}african-family.jpg`,
    title: 'Sudán del Sur',
    date: '29 Diciembre, 2025 / 9 Enero, 2026',
    info: 'Coexistence with ancestral tribes',
  },
];

const Proximas = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const topBorderRef = useRef<HTMLDivElement | null>(null);
  const leftBorderRef = useRef<HTMLDivElement | null>(null);
  const rightBorderRef = useRef<HTMLDivElement | null>(null);

  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  // const bottomBorderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.to(topBorderRef.current, {
      width: '100%',
      duration: 2,
    }, 'a')
    tl.to(leftBorderRef.current, {
      height: '100%',
      duration: 3,
    }, 'a')
    tl.to(rightBorderRef.current, {
      height: '100%',
      duration: 3,
      delay: .3
    }, 'a')
  }, [])


  return (
    <div className="w-full h-max bg-[#F2F0E9] place-items-center --font-romie relative"
      ref={containerRef}
    >
      <div className="top-border absolute w-0 top-0 left-0 border-t" ref={topBorderRef}></div>
        <div className="bottom-border absolute w-0 bottom-0 left-0 border-b "></div>

      <div className="h-full w-full md:w-[90%] px-4 py-6 flex flex-col gap-4 relative">
        <div className="left-border absolute h-0 top-0 left-0 border-l" ref={leftBorderRef}></div>
        <div className="right-border absolute h-0 top-0 right-0 border-r" ref={rightBorderRef}></div>

        <div className="w-full pt-2 pb-2 flex justify-between sticky top-14 left-0 bg-[#F2F0E9] z-30">
          <span className="text-2xl -skew-x-6">Upcoming expeditions</span>
            <Button text="View All" />
        </div>
        <div className="proxima-pills-container 
          grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-5
        "
        ref={pillsContainerRef}
        >
          {pillData.map((pill, index) => (
            <ProximaPill
              key={index}
              img={ pill.img }
              title={ pill.title }
              date={ pill.date }
              info={ pill.info }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proximas;