'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    
    return queryInterface.bulkInsert('Students', [{
      first_name: 'ade',
      last_name: 'anugerah',
      gender: 'pria',
      birthday: new Date('1989-04-17'),
      email: 'ade@yahoo.com',
      phone: '082123155617',
      height: 165,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'antoni',
      last_name: 'angga',
      gender: 'pria',
      birthday: new Date('1970-04-17'),
      email: 'angga@yahoo.com',
      phone: '082123155123',
      height: 170,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'andrew',
      last_name: 'senewe',
      gender: 'pria',
      birthday: new Date('1960-04-17'),
      email: 'andrew@yahoo.com',
      phone: '082123178123',
      height: 165,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    
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
