import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useQuery } from '@apollo/client';
import { GetAllPosts } from '../graphql/queries';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(GetAllPosts);
  if (!loading) console.log(data);
  if (error) console.log(error);

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
