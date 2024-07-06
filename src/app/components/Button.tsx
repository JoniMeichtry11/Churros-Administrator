import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <button>
      <Link href={href} className='group relative overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-10 py-4 rounded-lg text-white text-lg justify-center'>
      {children}
        <svg className="z-40 ml-2 -mr-1 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
        <div
          className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
        </div>
      </Link>
    </button>
  );
};

export default Button;
