'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(models) {
        let students = Student.findAll();
        students = students.map((student) => {
          student.full_name = student.getFullName();
          return student;
        });
        return students;
      }
    },
    instanceMethods: {
      getFullName: function () {
        return `${this.first_name} ${this.last_name}`;
      },
      getAge: function () {
        return (new Date()).this.getFullYear() - this.birthday.getFullYear();
      }
    }
  });
  return Student;
};