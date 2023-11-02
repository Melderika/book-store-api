'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        nama: 'Kamelia',
        alamat: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Saskia',
        alamat: 'Sumedang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Dini',
        alamat: 'Jogja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Salma',
        alamat: 'Bandung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
