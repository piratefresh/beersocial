import fetch from 'node-fetch';
import bcrypt from 'bcrypt';

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

export default {
    Query: {
        me: () => {
            return {
              username: 'Robin Wieruch',
            };
        },
        feed: () => links,
        getUser: (parent, {id}, {models}) => models.User.findOne({where: {id}}),
        allUsers: (parent, args, {models}) => models.User.findAll()
    },
    Mutation: {
      signUp: async (parent, {password, ...otherArgs}, {models}) => {
        try {
          const hashedPassword = await bcrypt.hash(password, 12);
          const user = await models.User.create({ ...otherArgs, password: hashedPassword });
          return user
        } catch (err) {
          return false
        }
      }
    }
  };
