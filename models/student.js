'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      validate : {
        min : 150
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique:function (value, next) {
          let self = this
          Student.findOne({
            where: {email:value},
          }).then(student => {
            if (student) {
              return next('email already in use')
            } 
            return next() 
          })
          .catch(err => {
            next(err)
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric : {
          args: true,
          msg:'Just number'
        },
        len : {
          args: [10,13],
          msg: 'length must between 10 - 13 character'
        },
        isAlphanumeric: {
          args: false,
          msg: 'not allow alphanumeric'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function () {
        Student.findAll()
        .then(students => {
          students.forEach(student => {
            console.log(`first name : ${student.first_name}`);
            console.log(`last name : ${student.last_name}`);
            console.log(`height : ${student.height}`);
            console.log(`gender : ${student.gender}`);
            console.log(`birthday: ${student.birthday}`);
            console.log(`email : ${student.email}`);
            console.log(`phone : ${student.phone}`);
            console.log(`full name : ${student.getFullName()}`);
            console.log(`\n`);
          })
        })
      }
    },
    instanceMethods: {
      getFullName: function () {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function () {
        let now = new Date().getFullYear()
        let birthday = new Date(this.birthday).getFullYear()
        let age = now - birthday
        return `Your age ${age}`
      }
    }
      
    
  });
  return Student;
};