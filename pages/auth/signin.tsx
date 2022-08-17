import Image from 'next/image';
import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

type Props = {
  providers: Provider;
};

const signin = ({ providers }: Props) => {
  return (
    <div className='flex items-center justify-center h-screen w-full flex-col space-y-8'>
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png'
        height={100}
        width={100}
      />
      {Object.values(providers).map((provider, index) => (
        <div key={index}>
          <button
            className='bg-blue-500 rounded-md w-[200px] py-2 font-bold hover:opacity-70'
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            SignIn with {provider?.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
