const gql = require("graphql-tag");

const beer = gql`
  extend type Query {
    getBeer(id: String!): Beer
    getRandomBeer: Beer
    getRandomBeers: [Beer]
  }
  type Labels {
    medium: String
    contentAwareMedium: String
    large: String
    contentAwareLarge: String
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
  type Brewery {
    name: String!
    website: String!
    images: Images
  }
  type Images {
    medium: String!
    icon: String!
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
    labels: Labels!
    breweries: [Brewery]!
  }
`;

export default beer;
