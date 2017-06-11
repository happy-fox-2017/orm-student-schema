'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg  : "Must be Email type example <test@gmail.com>"
        },
        isUnique: function(value, next){
          var self = this;
          Student.find({where: {email: value}})
          .then(function(student) {
            if (student && self.id !== student.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
        isAlphanumeric : {
          args : false,
          msg : "Phone not allow Alpanumberic"
        },
        len :{
          args : [10,13],
          msg : "Phone must be length 10 until 13"
        },
        isNumeric :{
          args : true,
          msg : "Phone not allow letter"
        }
      }
    },
    tinggi_badan : {
      type : DataTypes.STRING,
      validate :{
        isNumeric : true,
        min :{
          args : 150,
          msg : 'Minimal Height 150'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData : function(models){
        Student.findAll()
        .then(datas => {
          datas.forEach(data =>{
            console.log("first_name : "+data.first_name);
            console.log("last_name  : "+data.last_name);
            console.log("gender : "+data.gender);
            console.log("birthday : "+data.birthday);
            console.log("Email : "+data.email);
            console.log("Phone : "+data.phone);
            console.log("tinggi_badan : "+data.tinggi_badan);
            console.log('\n');
          })
        })
        .catch(err => {
          console.log(err);
        })
      }
    },
    instanceMethods : {
      getFullName : function (){
        let fullname = `${this.first_name} ${this.last_name}`;
        return fullname;
      },
      getAge: function(){
        let birthYear = new Date(this.birthday).getFullYear();
        let thisYear = new Date().getFullYear();
        return thisYear - birthYear;
      }
    }
  });
  return Student;
};
