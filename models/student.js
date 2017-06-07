'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
          type: DataTypes.STRING,
          validate : {
            isEmail: true,
            isUnique: function(value,next) {
              Student.findOne({
                where : {email : value}
              }).then(student=> {
                if(student) {
                  return next('Email Telah Di gunakan')
                }
                return next();
              }).catch(err =>{
                next(err)
              })
            }
          }
        },
    phone: {
          type : DataTypes.INTEGER,
          validate : {
            isNumeric : true,
            isAlphanumeric: {
              args : false ,
              msg :'Phoe Not Allow Aplhanumeric\nPhone Not Alloow Letters'
            },
            len : function(value) {
              if(value.toString().length < 10 || value.toString().length > 13) {
                throw new Error('Phone Length must be 10-13');
              }
            }
          }
    },
    height: {
      type : DataTypes.INTEGER,
      validate : {
        min : {
          args : 150,
          msg : 'Tinggi Minimal 150'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData(callback) {
        Student.findAll()
        .then((data) => {
          data.forEach((element) => element.fullname = `${element.firstname} ${element.lastname}`);
          return callback(data);
        });
      }

    },
    instanceMethods: {
        getFullName: function() {
          return `${this.firstname} ${this.lastname}`
        },

        getAge: function() {
          let result = new Date().getFullYear() - this.birthday.getFullYear();
          return `Age : ${result}`
        }
    }
  });
  return Student;
};
