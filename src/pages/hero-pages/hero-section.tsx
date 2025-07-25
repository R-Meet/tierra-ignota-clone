import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LandingPage from "../../components/landing-page";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <LandingPage
      bgImg={`${import.meta.env.BASE_URL}honey-hunters.jpeg`}
      imgLeft={`${import.meta.env.BASE_URL}tierra-svg.svg`} 
      imgRight={`${import.meta.env.BASE_URL}ignota-svg.svg`} 
    />
  )
}

export default Hero
