'use strict';

var Sequelize = require('sequelize');

var post = {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  post_author: { type: Sequelize.INTEGER },
  post_title: { type: Sequelize.STRING,
    get: function get() {

      // 'this' allows you to access attributes of the instance
      return this.getDataValue('post_title');
    }

  },
  post_content: { type: Sequelize.STRING,
    get: function get() {

      // 'this' allows you to access attributes of the instance
      return this.getDataValue('post_content');
    }

  },
  post_excerpt: { type: Sequelize.STRING,
    get: function get() {
      return this.getDataValue('post_excerpt');
    }

  },
  post_status: { type: Sequelize.STRING },
  post_type: { type: Sequelize.STRING },
  post_name: { type: Sequelize.STRING },
  post_mime_type: { type: Sequelize.STRING },
  guid: { type: Sequelize.STRING },
  post_parent: { type: Sequelize.INTEGER },
  menu_order: { type: Sequelize.INTEGER },
  comment_count: { type: Sequelize.INTEGER },
  post_date: { type: Sequelize.DATE },
  post_date_gmt: { type: Sequelize.DATE },
  post_modified: { type: Sequelize.DATE },
  post_modified_gmt: { type: Sequelize.DATE },
  comment_status: { type: Sequelize.STRING }

};

module.exports = post;