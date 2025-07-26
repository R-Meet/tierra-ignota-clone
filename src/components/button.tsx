

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>; 
}

export const Button = ({ text, className, ref, ...props }: ButtonProps) => {
  return (
    <button className={`border border-black rounded-3xl bg-[#B2ABEF] text-xs tracking-widest py-3 px-4 relative overflow-hidden cursor-pointer
            before:absolute before:bottom-0 before:left-0 before:h-0 before:content-[''] before:w-full before:bg-black
            hover:before:h-full before:transition-all before:duration-200 font-semibold before:-z-10 z-10 text-black hover:text-white transition-colors duration-200
            ${className}
          `}
          ref={ ref }
          {...props}
          >
      {text}
    </button>
  )
}


