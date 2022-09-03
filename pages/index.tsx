import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { gql, useQuery } from '@apollo/client';

const GetAllPosts = gql`
  query getAllPosts {
    posts {
      id
      caption
      createAt
      image
      author {
        id
        name
      }
      comments {
        id
        desc
      }
      likes {
        id
      }
    }
  }
`;

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(GetAllPosts, {
    onCompleted: (data) => console.log(data),
  });
  // if (!loading) console.log(data);
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
