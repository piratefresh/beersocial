

import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* GraphQL */
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
/* Pages */
import Index from './components/index'
import About from './components/about'
import Users from './components/users'

import NavBar from './components/navbar'

function AppRouter() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <NavBar />
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Fragment>
    </Router>
    </ApolloProvider>
  );
}

export default AppRouter;