// in App.js
import React from 'react';
import { Component } from 'react';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { Admin, Resource, ListGuesser, List } from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from './users';

const App = () => {


  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
