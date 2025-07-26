import { Button } from '../../components/button'

const ProjectSlogan = () => {
  return (
    <div className="min-h-screen border-b w-full flex flex-col items-center justify-center gap-6 px-4 py-10 md:px-12 bg-[#F2F0E9] --font-romie text-center">
      
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
        <p>This is a meeting place for curious people </p>
        <p>who are in love with the world.</p>
      </div>
      
      <p className="text-sm sm:text-base md:text-lg text-zinc-700">
        This is how Tierra Ignota emerged.
      </p>
      
      <div>
        <Button text="Travel with us" onClick={ () => window.location.href = `${import.meta.env.BASE_URL}/expenditions`}/>
      </div>
    </div>
  )
}

export default ProjectSlogan
