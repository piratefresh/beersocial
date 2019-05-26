const gql = require("graphql-tag")

const hello = gql`
  extend type Query {
    hello: String,
    feed: [Link!]!
  }
    type Link {
    id: ID!
    description: String!
    url: String!
    }
`;

export default hello;