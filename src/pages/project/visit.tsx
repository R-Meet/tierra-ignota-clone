import { ShowcaseWithImg } from '../../components/showcase';
import RightText from './right-text'

const Visit = () => {
  return (
    <div className="w-full relative bg-[#F2F0E9]">
      {/* Sticky Text Section - LOWER z-index */}
      <div className="w-full min-h-screen sticky top-0 left-0 z-10 flex items-center justify-center px-6 py-10 bg-[#F2F0E9]">
        <RightText
          para1="For this reason, at the beginning of each expedition we provide a series of guidelines and rules of conduct that ensure our impact is consistent with the values we promote."
          para2="We are committed to understanding and appreciating the worldviews of these unique societies from an ethical, not a subtractive, perspective."
        />
      </div>

      {/* Scrolling Content Section - HIGHER z-index */}
      <div className="w-full relative z-20 bg-[#F2F0E9]">
        {/* Visit Image Section 1 */}
        <section className="w-full px-5 py-10 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-start">
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-4 col-span-full">
              <img
                src={`${import.meta.env.BASE_URL}guj-visit.avif`}
                alt="Gujarat visit"
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="text-base --font-romie mt-4">
                During a wedding in Gujarat, India, 2024 [2024]
              </p>
            </div>
          </div>
        </section>

        {/* Visit Image Section 2 */}
        <section className="w-full px-5 py-10 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-start">
            <div className="md:col-span-4 col-span-full">
              <img
                src={`${import.meta.env.BASE_URL}nepal-visit.avif`}
                alt="Nepal visit"
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="text-base --font-romie mt-4">
                Celebrating the "Tiji Festival" in the ancient kingdom of Mustang, Nepal [2024]
              </p>
            </div>
            <div className="md:col-span-2 hidden md:block" />
          </div>
        </section>

        <section className="w-full pt-10 bg-transparent">
          <ShowcaseWithImg
            title='Who we are?'
            subtitle='When we were kids,'
            desc=' we fantasized about visiting the places we saw in documentaries and travel magazines. However, understanding how people got to these places was a mystery.'
            img={`${import.meta.env.BASE_URL}ladder-couple.avif`}
            // info='Portrayed in Sapa, Vietnam [2024]'
          />
        </section>
      </div>
    </div>
  )
}

export default Visit;