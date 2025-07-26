import { ShowcaseWithImg } from '../../components/showcase'

const ProjectShowCase = () => {
  return (
    <ShowcaseWithImg
      // height='-nav'
      title='GET TO KNOW US'
      subtitle='Our philosophy'
      desc=' is based on understanding travel as an opportunity to immerse ourselves in the local environment and understand other ways of living life without prejudice.'
      btnText='TRAVEL WITH US'
      btnStyle='bg-[#B2ABEF]'
      img={`${import.meta.env.BASE_URL}happy-family.avif`}
      info={'Celebrating the "Gau Tao" Festival in Lao Cai, Vietnam [2024]'}
    />
  )
}

export default ProjectShowCase
