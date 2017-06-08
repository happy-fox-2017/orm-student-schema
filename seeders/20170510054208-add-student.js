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
      first_name: 'Andrew',
      last_name: 'Senewe',
      gender: 'Male',
      birthday: new Date('1994-03-31'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Elle',
      last_name: 'Schön',
      gender: 'Female',
      birthday: new Date('1992-10-02'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', {})
  }
};
