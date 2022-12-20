import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`bg-zinc-100 border-2 border-solid border-transparent w-full rounded px-3 h-10 text-sm hover:border-zinc-300 outline-none focus:outline-none focus:border-zinc-400 transition-all duration-200 ease-in-out ${props.className}`}
      spellCheck={false}
    />
  );
};
