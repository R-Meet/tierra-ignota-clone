import { createFileRoute } from '@tanstack/react-router'
import ProjectHero from '../pages/project/project-hero'
import { ProjectLayout } from '../pages/project/project-layout'
import ProjectShowCase from '../pages/project/project-showcse'
import Footer from '../pages/hero-pages/footer'
import RightText from '../pages/project/right-text'
import InteractionShowCase from '../pages/project/interactio-showcase'
import Visit from '../pages/project/visit'
import ProjectSlogan from '../pages/project/project-slogan'

export const Route = createFileRoute('/project')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProjectLayout>
    <ProjectHero/>
    <ProjectShowCase/>
    <RightText
      para1={'In a world where the traditions and customs of hundreds of tribal societies are on the verge of disappearing, we see the need to focus on the value of cultural diversity.'}
      para2={'This is how Tierra Ignota was born, a tourism initiative that organizes immersive expeditions to remote locations, aimed at small groups of adventurers eager to learn about minority societies and ancestral ceremonies.'}
    />
    <InteractionShowCase/>
    <Visit/>
    <RightText
      para1={'That desire grew stronger and stronger, and each of us on our own, we began to live adventures around the world until we gained the experience, local contacts, and knowledge necessary to finally reach those communities we had long dreamed of.'}
      para2={'Several years later, we met and decided to join forces to create a joint project that would allow us to bring along other inquisitive minds who, perhaps, were also watching the same travel documentaries, without knowing how to get to those places.'}
    />
    <ProjectSlogan/>
    <Footer/>
  </ProjectLayout>
}
