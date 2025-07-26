import { createFileRoute } from '@tanstack/react-router'
import ExpenditionsHero from '../pages/expenditions/expenditions-hero'

export const Route = createFileRoute('/expenditions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ExpenditionsHero/>
}
