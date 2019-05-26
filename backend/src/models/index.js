import Sequelize from 'sequelize';

const sequelize = new Sequelize('beersocial', 'magnus', 'magnus',
  {
    dialect: 'postgres',
  },
);

const models = {
  User: sequelize.import('./user'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;