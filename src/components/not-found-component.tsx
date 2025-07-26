import { useNavigate } from '@tanstack/react-router'
import { Button } from '../components/button'
import { Navbar } from '../components/navbar'

export function NotFoundComponent() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar />
      <div className="w-full h-[calc(100vh-56px)] bg-[#F2F0E9] --font-romie flex flex-col items-center justify-center px-4 text-center gap-6">
        <span className="text-sm sm:text-base md:text-lg text-neutral-600 font-light">
          404 | Page not found
        </span>

        <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl --font-romie  leading-tight">
          <p>Were you looking</p>
          <p>for this?</p>
        </div>

        <div className="mt-4">
          <Button
            onClick={() => navigate({ to: `${import.meta.env.BASE_URL}` })}
            text="EXPEDITIONS"
          />
        </div>
      </div>
    </div>
  );
}
