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
    return queryInterface.bulkInsert('Students', [{
      firstname : 'Reza',
      lastname : 'Arif',
      gender: 'Pria',
      birthday: new Date('1991-10-10'),
      email: 'jajang@gmail.com',
      phone: '08158395253',
      createdAt : new Date(),
      updatedAt : new Date()
    }],
    {

    });
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
