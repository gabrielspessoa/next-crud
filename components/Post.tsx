import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { Edit, MoreVertical, Trash } from 'react-feather';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useSession } from 'next-auth/react';
import { DropdownItem, MotionDropdownContent } from './Dropdown';
import { AnimatePresence } from 'framer-motion';

export const Post = (props: {
  author: { name: string; email: string; image: string };
  text: string;
}) => {
  const {
    data: { user },
  } = useSession() as {
    data: { user: { name: string; email: string; image: string } };
  };

  return (
    <div className='bg-white w-full rounded-md shadow border border-solid border-zinc-200 flex flex-col p-3'>
      {/* Header */}
      <div className='flex items-center gap-3'>
        <Image
          src={props.author.image}
          alt='Post Author Picture'
          width={48}
          height={48}
          className='rounded-full'
        />
        <div className='flex-1'>{props.author.name}</div>
        <div className='relative'>
          {withMenu(
            <button className='p-2 rounded-full focus:outline-none hover:bg-zinc-200 active:bg-zinc-300'>
              <MoreVertical size={18} />
            </button>
          )(props.author.email === user.email ? 'myPostMenu' : 'postMenu')}
        </div>
      </div>
      {/* Content */}
      <div className='mt-3 text-zinc-600'>{props.text}</div>
    </div>
  );
};

export const withMenu =
  (Trigger: ReactNode) => (menu: 'postMenu' | 'myPostMenu') => {
    let Content: ReactNode | null = null;
    const [isOpen, setIsOpen] = useState(false);

    switch (menu) {
      case 'postMenu':
        Content = (
          <>
            <DropdownItem>Denunciar</DropdownItem>
            <DropdownItem>Sei lá</DropdownItem>
          </>
        );
        break;
      case 'myPostMenu':
        Content = (
          <>
            <DropdownItem>
              <Edit size={16} />
              Editar
            </DropdownItem>
            <DropdownItem>
              <Trash size={16} />
              Apagar
            </DropdownItem>
          </>
        );
        break;
      default:
        Content = null;
    }

    return (
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen} modal={false}>
        <DropdownMenu.Trigger asChild>{Trigger}</DropdownMenu.Trigger>

        <AnimatePresence>
          {isOpen && (
            <DropdownMenu.Portal forceMount>
              <MotionDropdownContent
                forceMount
                align='end'
                initial={{ opacity: 0, scale: 0.8, backgroundColor: '#eeeeee' }}
                animate={{ opacity: 1, backgroundColor: '#ffffff', scale: 1 }}
                exit={{ opacity: 0, backgroundColor: '#eeeeee' }}
                transition={{ duration: 0.15, ease: 'circOut' }}
              >
                {Content}
              </MotionDropdownContent>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    );
  };
