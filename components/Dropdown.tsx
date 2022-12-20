import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion } from 'framer-motion';
import { forwardRef, RefAttributes } from 'react';

export const DropdownContent = forwardRef<
  any,
  DropdownMenu.DropdownMenuContentProps & RefAttributes<HTMLDivElement>
>((props, ref) => (
  <DropdownMenu.Content
    {...props}
    ref={ref}
    className='bg-white p-2 shadow border border-zinc-200 rounded text-sm'
  >
    {/* <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      ref={ref}
    > */}
    {props.children}
    {/* </motion.div> */}
  </DropdownMenu.Content>
));

export const MotionDropdownContent = motion(DropdownContent);

export const DropdownItem = (
  props: DropdownMenu.DropdownMenuItemProps & RefAttributes<HTMLDivElement>
) => (
  <DropdownMenu.Item className='flex items-center gap-2 rounded px-2 py-1 data-[highlighted]:bg-zinc-200 data-[highlighted]:outline-none cursor-pointer'>
    {props.children}
  </DropdownMenu.Item>
);
