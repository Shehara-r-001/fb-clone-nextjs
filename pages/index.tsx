import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>facebook v2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
