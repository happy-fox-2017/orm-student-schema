'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const migrations = [];
    migrations.push(queryInterface.addColumn(
      'Students',
      'email',
      {
        type: Sequelize.STRING(50),
        allowNull: true,
      }
    ));

    migrations.push(queryInterface.addColumn(
      'Students',
      'height',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    ));

    migrations.push(queryInterface.addColumn(
      'Students',
      'phone',
      {
        type: Sequelize.STRING(30),
        allowNull: true,
      }
    ));

    return Promise.all(migrations);
  },
  down: function (queryInterface, Sequelize) {
    const migrations = [];
    migrations.push(queryInterface.removeColumn('Students', 'email'));
    migrations.push(queryInterface.removeColumn('Students', 'height'));
    migrations.push(queryInterface.removeColumn('Students', 'phone'));
    return Promise.all(migrations);
  }
};
