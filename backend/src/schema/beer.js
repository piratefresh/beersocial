
const gql = require("graphql-tag")

const beer = gql` 
    extend type Query {
        getBeer(id: String!): Beer
        getRandomBeer: Beer
        getBeers: [Beer]
    }
    type Beer {
        id: ID!
        name: String!
        nameDisplay: String!
        description: String
        originalGravity: String
        abv: String!
        ibu: String
        styleId: String!
        style: Style!
        status: String!
        statusDisplay: String
        availableId: Int
        available: Available
        beerVariationId: String
        beerVariation: String
        year: String!
        isRetired: String
    }
    type Available {
        id: ID
        name: String
        description: String
    }
    type Style {
        id: ID
        description: String!
        name: String!
        shortName: String!
    }
    type Category {
        name: String
    }
`;

export default beer;