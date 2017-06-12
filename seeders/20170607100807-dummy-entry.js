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
    
    return queryInterface.bulkInsert('Students', [
    {
      firstname: 'John',
      lastname: 'Smith',
      gender: 'Male',
      birthdate: '1945-08-17',
      email: 'j.smith@microsoft.com',
      phone: '08923847594',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Fulan',
      lastname: 'bin Fulan',
      gender: 'Male',
      birthdate: '1995-05-27',
      email: 'fbf@mailer.com',
      phone: '0883096783',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Shoujo',
      lastname: 'A',
      gender: 'Female',
      birthdate: '1997-02-22',
      email: 'f.ko@email.com',
      phone: '08882044589',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
    
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
