import { useNavigate } from '@tanstack/react-router'
import { Button } from './button'
import { Navbar } from './navbar'

export function NotFoundComponent() {

  const navigate = useNavigate();

  return <div className='h-screen w-full overflow-hidden'>
    <Navbar/>
    <div className='w-full h-[calc(100vh-56px)] bg-[#F2F0E9] --font-romie flex flex-col items-center justify-center gap-3'>
      <span>404 | Page not found</span>
      <div className='text-center text-6xl'>
        <p>Were you looking </p>
        <p>for this?</p>
      </div>
      <Button
        onClick={() => navigate({ to: `${import.meta.env.BASE_URL}` })}
        text='EXPENDITIONS'
      />
    </div>
  </div>
}