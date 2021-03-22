import React from 'react';
import RouterComponent from './RouterComponent';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-config';

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterComponent />
    </ApolloProvider>
  );
}

export default App;
