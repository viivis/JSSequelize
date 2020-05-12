// Option 2: Passing parameters separately (other dialects)

const Sequelize = require('sequelize');
module.exports = new Sequelize('codegig', 'postgres', 'buubu', {
    host: 'localhost',
    dialect:'postgres',
    operatorsAliases: false,

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    },
  });