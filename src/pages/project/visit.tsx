import RightText from './right-text'

const Visit = () => {
  return (
    <div className='w-full h-[250vh]  relative'>
      <div className='w-full h-screen sticky top-0 left-0 z-[-20] bg-[#F2F0E9] place-items-center place-content-center'>
        <RightText
          para1={'For this reason, at the beginning of each expedition we provide a series of guidelines and rules of conduct that ensure our impact is consistent with the values we promote.'}
          para2={'We are committed to understanding and appreciating the worldviews of these unique societies from an ethical, not a subtractive, perspective.'}
        />
      </div>
      <div className='w-full h-[150vh] z-50 bg-[#F2F0E9]'>
        <div className='grid grid-cols-6 w-full h-full '>
          <div className='w-full  col-span-2'></div>
          <div className='w-full  col-span-4'>
            <div className='w-full h-[90%]'>
              <img 
                src={`${import.meta.env.BASE_URL}guj-visit.avif`} 
                className='w-full h-full object-cover'
                alt="img" 
              />
              <p className='text-base --font-romie mt-5'>During a wedding in Gujarat, India, 2024 [2024]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visit
