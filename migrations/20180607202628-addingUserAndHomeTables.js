'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        role: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.TEXT
        },
        gender: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: "users",
        timestamps: true
    })

  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
  
};
