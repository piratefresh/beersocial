import React from "react";
import {Helmet} from "react-helmet";

const Meta = props => {
  return (
    <Helmet>
      <title>My App</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A React.js application" />
    </Helmet>
  );
};

export default Meta;
