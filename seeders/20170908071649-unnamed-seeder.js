'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Bambang Doe',
      last_name: 'Suprapto',
      email:'yuliusprawiranegara@sekolah.id',
      createdAt :new Date(),
      updatedAt :new Date()
    },
    {
      first_name: 'Rukmana Doe',
      last_name: 'Fatmawati',
      email:'bambangsuprapto@sekolah.id',
      createdAt :new Date(),
      updatedAt :new Date()
    },
    {
      first_name: 'Butet Doe',
      last_name: 'Naiborhu',
      email:'rukmanafatmawati@sekolah.id',
      createdAt :new Date(),
      updatedAt :new Date()
    },
    {
      first_name: 'Yulius Doe',
      last_name: 'Prawiranegara',
      email:'butetnaiborhu@sekolah.id',
      createdAt :new Date(),
      updatedAt :new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
