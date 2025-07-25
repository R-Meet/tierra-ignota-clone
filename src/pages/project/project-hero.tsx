import LandingPage from "../../components/landing-page"

const ProjectHero = () => {
  return (
      <LandingPage 
        bgImg={`${import.meta.env.BASE_URL}car.avif`}
        height={'h-[calc(100vh-3.5rem)]'}
        imgLeft={`${import.meta.env.BASE_URL}el-white.svg`}
        imgRight={`${import.meta.env.BASE_URL}proyecto-white.svg`}
      />
  )
}

export default ProjectHero
