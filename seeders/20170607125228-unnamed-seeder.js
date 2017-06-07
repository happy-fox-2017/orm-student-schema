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
      firstname : 'Jumadi',
      lastname : 'Akhma',
      gender: 'Pria',
      birthday: new Date('1991-02-27'),
      email: 'juamadi@gmail.com',
      phone: '08158395253',
      height: 160,
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
