'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Pella',
      last_name: 'De Vega',
      gender: 'perempuan',
      birthdate: '1989-11-21',
      email: 'pdvegaa@gmail.com',
      phone: '082110049199',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Kokoh',
      last_name: 'Tanamal',
      gender: 'laki-laki',
      birthdate: '1987-06-07',
      email: 'kokohtanamal@mgmail.com',
      phone: '081398638576',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
