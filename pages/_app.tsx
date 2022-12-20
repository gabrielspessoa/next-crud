import type { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import '../styles/globals.css';
import { NextComponentType, NextPageContext } from 'next';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: { auth?: boolean } & NextComponentType<NextPageContext, any, any>;
}

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component />
      )}
      <Toaster position='top-left' />
    </SessionProvider>
  );
}

const Auth = ({ children }: any) => {
  const session = useSession({ required: true });
  if (session.status === 'loading') {
    return 'Carregando...';
  }

  return children;
};
