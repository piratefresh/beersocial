
export default gql`
    type Query {
        me: User
    }

    type Mutation {
    signUp(
    username: String!
    email: String!
    password: String!
    ): Token!

    }
    type User {
        id: ID!
        username: String!
        email: String!
        role: String
        messages: [Message!]
    }

`;
