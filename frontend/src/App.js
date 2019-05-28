import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import AlternativeRoute from "./components/common/alternativeRoute";
import Loadable from "react-loadable";
import {Helmet} from "react-helmet";
import {StepperProvider} from "./StepperContext";
/* GraphQL */
import ApolloClient from "apollo-boost";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloProvider} from "react-apollo";
/* Pages */
import Index from "./components/index";
import Users from "./components/users";
/* Components */
import Meta from "./components/Meta";
import NavBar from "./components/NavBar";

const theme = {
  colors: {
    yellow: "#ffbe0d"
  }
};

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background:	#F6F6F6;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Loading = () => <div>...loading</div>;

const AsyncIndex = Loadable({
  loader: () => import("./routes/Index"),
  loading: Loading
});

const AsyncRegister = Loadable({
  loader: () => import("./routes/Register"),
  loading: Loading
});

const AsyncBeers = Loadable({
  loader: () => import("./routes/Beers"),
  loading: Loading
});

function AppRouter() {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);

  function setCurrentState(stateCurrent) {
    setCurrent(stateCurrent);
  }
  function setLengthState(stateLength) {
    setLength(stateLength);
  }
  return (
    <ApolloProvider client={client}>
      <Meta />
      <GlobalStyle />
      <Router>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <NavBar />
            <Switch>
              <Route exact path="/" component={AsyncIndex} />
              <Route path="/beers/" component={AsyncBeers} />
              <Route path="/users/" component={Users} />
              <StepperProvider
                value={{
                  current,
                  length,
                  setLengthState,
                  setCurrentState
                }}
              >
                <AlternativeRoute
                  exact
                  path="/register/"
                  component={AsyncRegister}
                />
              </StepperProvider>
            </Switch>
          </Wrapper>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default AppRouter;
