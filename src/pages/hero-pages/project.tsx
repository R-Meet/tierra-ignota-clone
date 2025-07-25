import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShowcaseWithImg } from "../../components/showcase";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  return (
    <ShowcaseWithImg
      title='GET TO KNOW THE PROJECT'
      subtitle='Our Philosophy '
      desc="is part to understand the journey as an opportunity to immerse ourselves in the local environment and understand other ways of living life without prejudice."
      btnText="Learn More"
      img={`${import.meta.env.BASE_URL}car.avif`}
    />
  )
}
export default Project
