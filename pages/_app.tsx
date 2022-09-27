import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <Toaster position='top-right' reverseOrder={false} />
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
