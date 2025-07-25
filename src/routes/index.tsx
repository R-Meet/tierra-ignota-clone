import { createFileRoute } from '@tanstack/react-router'
import Hero from '../pages/hero-pages/hero-section'
import { Navbar } from '../components/navbar'
import Slogan from '../pages/hero-pages/slogan-page'
import Proximas from '../pages/hero-pages/proximas-page'
import Project from '../pages/hero-pages/project'
import Footer from '../pages/hero-pages/footer'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <Hero/>
    <Navbar/>
      <Slogan/>
      <Proximas/>
      <Project/>
      <Footer/>
  </>
}
