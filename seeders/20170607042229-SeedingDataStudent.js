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
    return queryInterface.bulkInsert('students', [{
      first_name  : "Antoni",
      last_name   : "Angga",
      gender      : "Male",
      birthday    : "1995-04-15",
      phone       : "081294373359",
      createdAt   : new Date(),
      updatedAt   : new Date(),
      email       : "antoniangga14@gmail.com",
      tinggi_badan: 176
    },{
      first_name : "Novi",
      last_name  : "Talim",
      gender     : "Female",
      birthday   : "1994-11-14",
      phone      : "081294373359",
      createdAt  : new Date(),
      updatedAt  : new Date(),
      email      : "novitalim@gmail.com",
      tinggi_badan: 160
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('students', null, {});
  }
};
