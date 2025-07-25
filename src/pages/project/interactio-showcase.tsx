import { ShowcaseWithImg } from '../../components/showcase'

const InteractionShowCase = () => {
  return (
    <ShowcaseWithImg
      title='INTERACTION WITH COMMUNITIES'
      subtitle='Our priority '
      desc=' is that the interactions with the communities we visit are carried out with respect.'
      info='Camping in Borkonch, a Dassanech tribe village, Ethiopia [2024]'
      img={`${import.meta.env.BASE_URL}interaction.avif`}
    />
  )
}

export default InteractionShowCase
