'use strict';
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        // email : DataTypes.STRING,
        // phone: DataTypes.STRING
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: {
              args: [6, 128],
              msg: "Email address must be between 6 and 128 characters"
            },
            isEmail: {
              msg: "Email address must be valid"
            }
          }
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isAlphanumeric: {
              args: false,
              msg: "Number phone is not allow Alphanumeric"
            },
            len: {
              args: [8, 13],
              msg: "Number phone must be length 8 until 13"
            },
            isNumeric: {
              args: true,
              msg: "Number phone is not allow using letter"
            }
          }
        },
        height:{
          type: DataTypes.INTEGER,
          validate : {
            min:{
              args : 150,
              msg : 'Only 150cm above can join to this school'
            }
          }
        }
      },  {
          classMethods: {
            associate: function(models) {
              // associations can be defined here
            },
            getAllData : function(dataAll){
              Student.findAll()
              .then(Students => {
                return dataAll(Students)
                })
              }
            },
            
    instanceMethods: {
      getFullName: () => {
          let fullName = `Fullname : ${this.first_name} ${this.last_name}`;
          return fullName;
      },
      getAge: function() {
        let result = new Date().getFullYear() - this.birthdate.getFullYear()
        return `Age this year : ${result}`;
        // let yearBirthdate = new Date(this.birthdate).getFullYear();
        // let yearNow = new Date().getFullYear();
        // return `Age this year : ${yearNow} - ${yearBirthdate}`;
      }
    }
  });
  return Student;
};
