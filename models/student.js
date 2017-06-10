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
        isEmail: {
          args: true,
          msg: "Input your email in correct order, use @ duh!"
        },
        isUnique: function(content, next) {
          Student.find({
              where: {
                email: content
              },
              attributes: ['id']
            })
            .then((Students) => {
              if (Students && this.id !== Students.id) {
                return next("Email is someone's precious")
              }
              return next();
            })
            .catch((err) => {
              return next(err)
            })
        } //isUnique
      } //validate
    }, //email
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: "Please input the number between 10 to 13 length"
        },
        isNumeric: {
          args: true,
          msg: "Please do not input letter in number"
        },
        isAlphanumeric: {
          args: false,
          msg: "Please do not input alphanumeric in number"
        }
      } //validate
    }, //phone
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "Only 150cm above can get to this school unfotunately"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll()
          .then(Students => {
            return callback(Students)
          })
      }
    },

    instanceMethods: {
      getFullName: function() {
        let fullName = `Fullname: ${this.first_name} ${this.last_name}`;
        return fullName;
      },

      getAge: function() {
        let result = new Date().getFullYear() - this.birthday.getFullYear();
        return `Age: ${result}`;
      }
    }
  });
  return Student;
};