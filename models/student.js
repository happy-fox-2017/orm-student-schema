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
        unique : {
          args : true,
          msg  : "Email already use"
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
            console.log(data.id);
            console.log(data.first_name);
            console.log(data.last_name);
            console.log(data.gender);
            console.log(data.birthday);
            console.log(data.email);
            console.log(data.phone);
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
