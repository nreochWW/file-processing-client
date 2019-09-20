import * as React from "react";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "@apollo/react-hooks";
import Table from "./components/Table";

interface Definintion {
  kind: string;
  operation?: string;
}

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql"
});
const wsLink = new WebSocketLink({
  options: {
    reconnect: true
  },
  uri: "ws://localhost:4000/graphql"
});

const link = split(
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

const FileProcessing = () => (
  <ApolloProvider client={client}>
    <Table />
  </ApolloProvider>
);

export default FileProcessing;
