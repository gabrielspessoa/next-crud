import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { AlertCircle } from 'react-feather';
import toast from 'react-hot-toast';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Post } from '../components/Post';
import { PostList } from '../components/PostList';

export default function Home() {
  const {
    data: { user },
  } = useSession() as {
    data: { user: { name: string; email: string; image: string } };
  };
  const [inputText, setInputText] = useState('');

  return (
    <div className='max-w-md px-5 mx-auto mt-4 flex flex-col items-center'>
      <h1 className='text-lg mb-1 text-center'>
        Bom dia, <br />
        <span className='text-xl'>{user.name}</span>
      </h1>

      <Button
        onClick={() => {
          toast('Deslogando...', {
            icon: <AlertCircle />,
          });
        }}
        className='bg-rose-600 text-xs w-fit h-auto py-1.5 px-2 hover:bg-rose-500 active:bg-rose-700 text-white rounded mb-3 shadow'
      >
        Deslogar
      </Button>
      <div className='bg-white w-full flex flex-col gap-5 p-4 border border-zinc-200 shadow-md rounded-lg'>
        <div className='flex gap-2'>
          <Input
            placeholder='Comentário'
            value={inputText}
            onChange={(e) => setInputText(e.currentTarget.value)}
            className='focus:!border-blue-600 focus:bg-transparent shadow focus:shadow-transparent'
          />
          <Button className='!w-fit shadow'>Enviar</Button>
        </div>
        <PostList />
      </div>
    </div>
  );
}

Home.auth = true;
