import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Stories from '../components/Stories';

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
        <div className='mt-[60px]'>
          <Stories />
        </div>
      </div>
    </div>
  );
};

export default Home;
