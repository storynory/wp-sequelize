'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var models = require('./models');
var sequelize = require('./start_mysql.js');
var connectors = {};
var timeformats = {};
var post = sequelize.define('wp_posts', models.post, { timestamps: false });

/*

define associations and relationships 


*/

exports.post = post;