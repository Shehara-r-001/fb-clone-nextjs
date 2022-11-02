import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://fb-clone-nextjs-seven.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
