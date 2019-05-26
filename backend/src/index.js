import 'dotenv/config';
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import merge from 'lodash.merge'
import models, { sequelize } from './models';
/* Graphql */
import typeDefs from './schema/'
import user from './resolvers/user'
import hello from './resolvers/hello'
import beer from './resolvers/beer'

const server = new ApolloServer({ typeDefs, resolvers: merge(user, hello, beer), 
  context: {models,} });

const app = express();
/* Apply Cors for cross domain requests */
/* app.use(cors) */
/* Logger */
app.use(morgan('dev'));

server.applyMiddleware({ app });

sequelize.sync(/* {force: true} */).then(async () => {

  app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
});


