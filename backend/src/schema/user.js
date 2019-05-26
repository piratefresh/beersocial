
const gql = require("graphql-tag")

const user = gql` 
    type Query {
        me: User
        getUser(id: Int!): User!
        allUsers: [User!]!
    }
    type Mutation {
        signUp(username: String!, email: String!, password: String!): User!
    }
    type User {
        id: Int!
        username: String!
        email: String!
        role: String
    }
`;

export default user;
