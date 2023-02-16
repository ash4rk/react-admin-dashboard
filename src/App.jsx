// in App.js
import React from 'react';
import { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin, Resource, ListGuesser } from 'react-admin';

const App = () => {

  const [dataProvider, setDataProvider] = React.useState(null);
  React.useEffect(() => {
    buildGraphQLProvider({ clientOptions: { uri: 'https://api.mocki.io/v2/c4d7a195/graphql' } })
      .then(graphQlDataProvider => setDataProvider(() => graphQlDataProvider));
  }, []);

  if (!dataProvider) {
    return <div>Loading </div>;
  }

  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="buildQuery2" list={ListGuesser} />
    </Admin>
  );
}

export default App;
