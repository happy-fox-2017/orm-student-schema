'use strict';

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          isUnique: function(value, proc){
            Student.find({
              where: {
                email: value
              }
            }).then((err)=> {
              if(err)
                return proc(`Email already in use`);
              proc();
            })
          }
        }
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 50
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: function (value, proc) {
            let phoneNum = /[0-9]{10,30}/
            if(phoneNum.test(value))
              proc();
            return proc('Phone Number format is not valid');
          }
        }
      }
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        },
        allData: function (callback) {
          let fullName = []
          Student.findAll() 
          // ini Student yg diatas.. yg class 
          .then((s) => {
            s.forEach((w) => {
              let obj = {};
              obj['id'] = w.id
              obj['first_name'] = w.first_name
              obj['last_name'] = w.last_name
              obj['full_name'] = w.getFullName();
              fullName.push(obj)
            })
            callback(fullName)
          })
        },
        allAge: function(callback) {
          let ages = [];
          Student.findAll()
          .then((s)=> {
            s.forEach((w)=> {
              let obj = {};
              obj['id'] = w.id;
              obj['full_name'] = w.getFullName();
              obj['birthday'] = new Date(w.birthday);
              obj['age'] = w.getAge()
              ages.push(obj)
            })
            callback(ages)
          })
        }
      },
      instanceMethods: {
        getFullName: function() {
          return `${this.first_name} ${this.last_name}`
        },
        getAge: function() {
          let today = new Date();
          let birthday = new Date(this.birthday);
          let age = today.getFullYear() - birthday.getFullYear();
          let month = today.getMonth() - birthday.getMonth();
          if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
            age-=1;
          }
          return age;
        }
      }
    });
    return Student;
  };