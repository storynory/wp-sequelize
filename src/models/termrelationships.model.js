
var Sequelize = require('sequelize');

var termRelationships =  {
    object_id: { type: Sequelize.INTEGER, primaryKey: true },
    term_taxonomy_id: { type: Sequelize.INTEGER },
    term_order: { type: Sequelize.INTEGER },
};

module.export = termRelationships;
