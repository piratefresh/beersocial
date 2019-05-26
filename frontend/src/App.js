import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/* GraphQL */
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
/* Pages */
import Index from "./components/index";
import About from "./components/about";
import Users from "./components/users";
import Register from "./routes/Register";

import NavBar from "./components/navbar";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function AppRouter() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route path="/register/" component={Register} />
          </Switch>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default AppRouter;
