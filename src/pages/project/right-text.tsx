
type RightTextProp = {
  para1: string;
  para2?: string;
}

const RightText = ({ para1, para2 }: RightTextProp) => {
  return (
    <div className="w-full h-[60vh] md:h-[50vh] "> 
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-[#F2F0E9] relative">
        <div className="relative w-full h-full hidden md:block" />

        {(para1 && para2) && <div
          className="relative  --font-romie flex flex-col items-center justify-center gap-6 text-sm sm:text-base md:text-lg leading-relaxed font-medium tracking-wide p-4 sm:p-6 md:p-8 h-full"
        >
          {para1 && <p className="max-w-2xl text-center md:text-left">
            {para1}
          </p>}
          {para2 && <p className="max-w-2xl text-center md:text-left">
            {para2}
          </p>}
        </div>}
      </div>
    </div>
  )
}

export default RightText
