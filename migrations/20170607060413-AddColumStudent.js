'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Students',
        'email',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Students',
        'tinggi_badan',
        {
          type : Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'Students',
        'phone',
        {
          type : Sequelize.STRING
        }
      )
    ]
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Students', 'email'),
      queryInterface.removeColumn('Students', 'tinggi_badan'),
      queryInterface.removeColumn('Students', 'phone')
    ]
  }
};
