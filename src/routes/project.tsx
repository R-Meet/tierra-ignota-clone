import { createFileRoute } from '@tanstack/react-router'
import ProjectHero from '../pages/project/project-hero'
import { ProjectLayout } from '../pages/project/project-layout'
import ProjectShowCase from '../pages/project/project-showcse'
import Footer from '../pages/hero-pages/footer'
import RightText from '../pages/project/right-text'
import InteractionShowCase from '../pages/project/interactio-showcase'
import Visit from '../pages/project/visit'

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
    <Footer/>
  </ProjectLayout>
}
