'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    // birthday: DataTypes.DATE,
    height:{
     type: DataTypes.INTEGER,
     validate: {
       min:{
         args: 150,
         msg: "Height min 150"
       }
     }
   },
   birthday: DataTypes.DATE,
   email:{
     type: DataTypes.STRING,
     allowNull: false,
     unique: true,
     validate: {
       isEmail: {
         args: true,
         msg: "Email format incorrect"
       },
       isUniqued: function (value, next) {
         Student.findAll({
           where: {
             email: value
           }
         }).then(function (data) {
           if(data.length > 0) {
             return next('email exists');
           }
           return next();
         })
       }
     }
   },
   phone: {
     type: DataTypes.STRING,
     validate: {
       isAlphanumeric: {
         args: false,
           msg: "Phone not allow alphanumeric"
       },
       isNumeric: {
         args: true,
         msg: "Phone not allow letters"
       },
       len:{
         args:[10,13],
         msg: "Phone length must be 10-13"
       }
     }
   },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(models) {
        Student.findAll()
        .then(students => {
          models(students)
        })
      }
    },
    instanceMethods: {
      getFullName: function(){
        this.fullname = `${this.first_name} ${this.last_name}`;
        return this.fullname
      },
      getAge: function(){
        return new Date().getFullYear() - this.birthday.getFullYear()
      }
    }
  });
  return Student;
};