import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

// The client is configured to look for the server at the address we defined (Port 4000)
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(), // This manages data storage on the client side
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* Replace <App /> with your main component if you use a different name */}
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
