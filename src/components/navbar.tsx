import { NavMenu } from "./nav-menu";
import gsap from "gsap";


const Navbar = () => {
  const openNavMenu = () => {
    const el = document.querySelector('.nav-menu-container');
    const content = document.querySelector('.nav-content-container')
    gsap.fromTo(el, {
      yPercent: 100
    }, {
      yPercent: 0,
      display: 'block',
      
    });

    gsap.to(content, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5
    })
  }

  return (
    <>
    <nav className="navbar w-full overflow-hidden h-14 bg-[#F2F0E9] sticky top-0 left-0 border-b text-xs border-b-black flex justify-between z-40 items-center --font-pp font-thin tracking-wider">
      <div className="pl-6 hover:bg-[#E7E5DE] pr-6 py-1 rounded-r-full  transition-all cursor-pointer flex items-center gap-2 overflow-hidden">
        <span>ES</span>
        <div className="h-[0.01rem] p-[1px] bg-black w-6"></div>
        <span className="opacity-60">EN</span>
      </div>
      <div className="w-max h-5 overflow-hidden">
        <img src="/nav-logo-black.svg" alt="img" 
          className="w-full h-full object-cover"
        />
      </div>
      <button onClick={openNavMenu} className="flex items-center px-3 gap-1 cursor-pointer overflow-hidden">
        <span>MENU</span>
        <div className="w-2 h-2 bg-black"></div>
      </button>
    </nav>
    <NavMenu/>
    </>
  )
}

export { Navbar };
