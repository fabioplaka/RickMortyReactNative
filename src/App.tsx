import { ApolloProvider } from "@apollo/client";
import React from "react";

import { client } from "./apollo/client";

import NavigationContainer from "./navigation/NavigationContainer";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer />
    </ApolloProvider>
  );
}
