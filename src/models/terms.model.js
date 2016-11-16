var Sequelize = require('sequelize');
var terms =  {
    term_id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
    term_group: { type: Sequelize.INTEGER },
};

module.export = terms;
