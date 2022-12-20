import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
      className={twMerge([
        `bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-sm w-full px-4 text-white h-10 rounded`,
        props.className,
      ])}
    >
      {props.children}
    </button>
  );
};
