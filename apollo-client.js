import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://eastwindsor.stepzen.net/api/kissing-hare/__graphql',
  headers: {
    Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
  },
  cache: new InMemoryCache(),
});

export default client