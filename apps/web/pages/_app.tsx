import { AppProps } from 'next/app';

import Head from 'next/head';

import './styles.scss';

import { createContext } from 'react';

export const MobxContext = createContext({});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Petfinder - час знайти тваринку </title>
      </Head>

      <MobxContext.Provider value={0}>
        <Component {...pageProps} />
      </MobxContext.Provider>
    </>
  );
}

export default App;
