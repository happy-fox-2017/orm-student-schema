'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
            Student.find({
              where: { email: value },
              attributes: ['id']
            })
              .done(function(error, user) {
                if (error) {
                    // Some unexpected error occured with the find method.
                  return next(error);
                }
                if (user) {
                    // We found a user with this email address.
                    // Pass the error to the next method.
                  return next('Email address already in use!');
                }
                // If we got this far, the email address hasn't been used yet.
                // Call next with no arguments when validation is successful.
                next();
              });
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: { min: 150 }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: { msg: 'Must be numeric' },
        len: { args: [10, 13], msg: 'Must be 10-13' }
      }
    }
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