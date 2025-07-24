import { Navbar } from "./components/navbar";
import Footer from "./pages/footer";
import Hero from "./pages/hero-section";
import Proximas from "./pages/proximas-page";
import Project from "./pages/project";
import Slogan from "./pages/slogan-page";

const Home = () => {
  return (
    <main className="relative">
      <Hero/>
      <Navbar/>
      <Slogan/>
      <Proximas/>
      <Project/>
      <Footer/>
    </main>
  )
}

export default Home;