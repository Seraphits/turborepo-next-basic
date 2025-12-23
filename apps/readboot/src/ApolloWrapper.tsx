"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core/index.js";
import { ApolloProvider } from "@apollo/client/react/index.js";

const client = new ApolloClient({
  // Using HttpLink explicitly satisfies the initialization requirement
  link: new HttpLink({
    uri: "/api/graphql",
  }),
  cache: new InMemoryCache(),
});

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
