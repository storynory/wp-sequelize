'use strict';

var Sequelize = require('sequelize');

var termRelationships = sequelize.define('wp_term_relationships', {
  object_id: { type: Sequelize.INTEGER, primaryKey: true },
  term_taxonomy_id: { type: Sequelize.INTEGER },
  term_order: { type: Sequelize.INTEGER }
});

module.export = termRelationships;