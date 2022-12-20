import { GetServerSidePropsContext } from 'next';
import { getToken } from 'next-auth/jwt';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const token = await getToken({ req: ctx.req });
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className='w-[30rem] mx-auto flex flex-col items-center bg-white rounded-md shadow-md mt-5 py-8'>
        <div className='text-xl mb-3'>Login</div>
        <form className='flex flex-col w-2/3'>
          <Button type='button' onClick={() => signIn('google')}>
            Entrar com o Google
          </Button>
        </form>
      </div>
    </>
  );
}
