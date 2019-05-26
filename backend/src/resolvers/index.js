import user from './user'
import hello from './hello'

const resolvers = {
  Query: {
    user,
    hello
  }
}

export default resolvers;