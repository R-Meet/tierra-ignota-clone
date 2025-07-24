import gsap from "gsap";
import { useRef } from "react";

export const NavMenu = () => {
  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  const closeNavMenu = () => {
    const el = document.querySelector('.nav-menu-container') as HTMLDivElement;

    gsap.to(contentContainerRef.current, {
      opacity: 0,
      duration: 0.5
    });

    gsap.to(el, {
      yPercent: -100,
      ease: 'power4.inOut',
      duration: 1.5,
      delay: 0.5,
      onComplete: () => {
        el.style.display = 'none';
      }
    });
  };

  return (
    <div className='nav-menu-container w-full h-screen fixed top-0 left-0 z-50 hidden bg-[#43493A]'>
      <div
        className="nav-content-container w-full h-full flex flex-col justify-between px-4 py-6 sm:p-8 md:p-10 lg:p-12 opacity-100"
        ref={contentContainerRef}
      >
        <button
          onClick={closeNavMenu}
          className="flex items-center gap-3 cursor-pointer text-white uppercase self-end text-sm sm:text-base"
        >
          <span>close</span>
          <div className="w-2 h-2 bg-white"></div>
        </button>

        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl --font-romie capitalize">
          <a href="#" className="hover:text-[#8D997C] text-[#d8eabe]">Home</a>
          <a href="#" className="hover:text-[#8D997C] text-[#d8eabe]">Expeditions</a>
          <a href="#" className="hover:text-[#8D997C] text-[#d8eabe]">The project</a>
        </div>

        <footer className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-7 px-2 text-center">
          {['FAQ', 'AVISO LEGAL', 'política de cookies', 'política de privacidad'].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-white text-xs sm:text-sm md:text-base uppercase tracking-widest hover:text-[#8D997C]"
            >
              {link}
            </a>
          ))}
        </footer>
      </div>
    </div>
  );
};
