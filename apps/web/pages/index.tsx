import { Layout } from '@ui/widgets';

import Head from 'next/head';

import { createContext } from 'react';

export const MobxContext = createContext({});

function HomePage() {
  return (
    <>
      <Head>
        <title>Petfinder - час знайти тваринку </title>
      </Head>

      <Layout>
        <h1>Home page</h1>
      </Layout>
    </>
  );
}

export default HomePage;
