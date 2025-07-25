import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null);
  const tierraImgRef = useRef<HTMLImageElement | null>(null);
  const ignotaImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.fromTo(tierraImgRef.current, {
      xPercent: -100,
      opacity: 0
    }, { 
      xPercent: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 40%',
      } 
    })

    gsap.fromTo(ignotaImgRef.current, {
      xPercent: 100,
      opacity: 0
    }, { 
      xPercent: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 40%',
      } 
    })
  }, [])

  return (
    <footer className="w-full min-h-[61vh] bg-[#B2ABEF] overflow-hidden" ref={footerRef}>
      <div className="w-full h-full relative grid grid-rows-7">
        <div className="row-span-3 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full border-b md:border-b-0 md:border-r grid grid-rows-3">
            <div className="border-b row-span-2 flex flex-col items-center justify-center gap-5 px-4 py-6 text-center">
              <p className="text-xl md:text-2xl --font-romie">
                Join <span className="italic"> our newsletter</span>
              </p>
              <div className="w-full md:w-1/2 flex border rounded-4xl overflow-hidden">
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="flex-1 border-r px-5 py-3 outline-none bg-white placeholder:text-gray-500 placeholder:opacity-90 rounded-l-4xl"
                />
                <button className="bg-[#D8EABE] px-4 py-2 rounded-r-4xl flex items-center justify-center">
                  <img 
                    // src="/arrow.svg" 
                    src={`${import.meta.env.BASE_URL}arrow.svg`}
                    alt="submit" 
                    className="w-4 h-4" 
                  />
                </button>
              </div>
            </div>

            <label className="flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm --font-romie font-semibold tracking-wider cursor-pointer hover:bg-[#a29cda] transition-colors">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border-2 bg-white border-black rounded-sm checked:bg-black checked:border-black"
              />
              <div className="flex flex-wrap gap-1 text-sm text-center justify-center">
                <span>I</span>
                <span>have</span>
                <span>read </span>
                <span>and</span>
                <span>accept</span>
                <span>the</span>
                <a href="#" className="flex gap-1 uppercase relative">
                  <span>privacy</span>
                  <span>policy</span>
                  <div className="bottom-border-link absolute bottom-0 left-0 w-full border-[1px]"></div>
                </a>
              </div>
            </label>
          </div>

          <div className="overflow-hidden flex flex-col items-center justify-center gap-4 py-6 px-4">
            <p className="text-lg font-medium">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center p-3 rounded-full border hover:bg-[#D8EABE] transition-colors">
                <img 
                  // src="/insta-svg.svg" 
                  src={`${import.meta.env.BASE_URL}insta-svg.svg`} 
                  alt="Instagram" 
                  className="w-6 h-6" 
                />
              </a>
              <a href="#" className="flex items-center justify-center p-3 rounded-full border hover:bg-[#D8EABE] transition-colors">
                <img 
                  // src="/facebook.svg" 
                  src={`${import.meta.env.BASE_URL}facebook.svg`} 
                  alt="Facebook" 
                  className="w-6 h-6" 
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-b flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-3 text-center md:text-left">
          <div className="tracking-widest text-sm uppercase">
            <span>Do you have  </span>
            <span>any questions?</span>
          </div>
          <div className="flex flex-wrap gap-1 justify-center md:justify-end text-sm">
            {
              "Check out our frequently asked questions or send us an email."
                .split(" ")
                .map((word, i, arr) => {
                  if (i === 3) {
                    return (
                      <span
                        key={i}
                        className="bg-[#D8EABE] px-2 uppercase --font-romie font-semibold tracking-widest"
                      >
                        {arr[3]} {arr[4]}
                      </span>
                    );
                  } else if (i === 4) {
                    return null;
                  } else {
                    return (
                      <span key={i} className="uppercase tracking-widest">
                        {word}
                      </span>
                    );
                  }
                })
            }
          </div>
        </div>

        {/* Logos */}
        <div className="row-span-2 border-b flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4">
          <img 
            ref={tierraImgRef} 
            // src="/tierra-black.svg" 
            src={`${import.meta.env.BASE_URL}tierra-black.svg`} 
            alt="Tierra Logo" 
            className="w-full sm:w-1/2 max-h-24 object-contain" 
          />
          <img 
            ref={ignotaImgRef} 
            // src="/ignota-black.svg" 
            src={`${import.meta.env.BASE_URL}ignota-black.svg`} 
            alt="Ignota Logo" 
            className="w-full sm:w-1/2 max-h-24 object-contain" 
          />
        </div>

        <div className="flex items-center justify-center px-4 py-4 text-xs sm:text-sm text-center --font-romie font-semibold tracking-widest">
          <span>
            This project is a <strong>clone</strong> of <a type='_blank' href="https://www.tierraignota.com/" className="underline bg-[#D8EABE] px-4">tierraignota.com</a> created for educational and non-commercial purposes only. All rights to original content, design, and trademarks belong to <a href="https://www.tierraignota.com/" className="underline bg-[#D8EABE] px-4">tierraignota.com</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
