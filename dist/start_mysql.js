'use strict';

var config = require('../config.json');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.db, config.user, config.password, {
      dialect: 'mysql', // or 'sqlite', 'postgres', 'mariadb'
      port: 3306, // or 5432 (for postgres)
      host: '127.0.0.1'
});

module.exports = sequelize;