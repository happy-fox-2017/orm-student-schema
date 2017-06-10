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
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      birthday: new Date('1992-02-09'),
      email: 'john@doe.com',
      phone: 'JOHNDOE-1007500',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Jane',
      last_name: 'Doe',
      gender: 'Female',
      birthday: new Date('1992-02-10'),
      email: 'jane@doe.com',
      phone: 'JANEDOE-1007520',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Fulan',
      last_name: 'Gak Bolong',
      gender: 'Male',
      birthday: new Date('1990-12-12'),
      email: 'fulan@doe.com',
      phone: 'FULAN-1007510',
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