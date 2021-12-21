'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ISBN: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      authors: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.REAL
      },
      price: {
        type: Sequelize.FLOAT
      },
      coverImage: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('inventories');
  }
};