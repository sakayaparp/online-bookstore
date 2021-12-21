'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('inventories', [{
      ISBN: "9971-5-0210-0",
      title: "Mock Book Name",
      authors: "Authors",
      amount: 500,
      price: 100,
      coverImage: "./image.jpg",
      description: "Lopem Lopem Lopem",
      categoryId: "123e4567-e89b-12d3-a456-426614174000",
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('inventories', null, {});
  }
};
