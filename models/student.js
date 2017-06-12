'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        isUnique: function(content, next) {
          Student.find({where: {email: content}, attributes: ['id']})
          .then((student) => {
            if(student && this.id !== student.id) {
              return next('Email sudah terdaftar')
            }
            return next();
          })
          .catch((err) => {return next(err)})
        }
      },
    }, // email
    
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is:{
          args: /^\d{8,12}/,
          msg: 'Nomer telepon harus terdiri dari 8-12 angka.'
        }
      }
    } // phone
    
  }, {
    
    getterMethods: {
      fullname: function() {return `${this.firstname} ${this.lastname}`}
    },
    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      
      getAllData: function(call) {
        Student.findAll()
        .then(students => {
          return call(students);
        })
        .catch(err => err);
      }
      
    }, // end of classMethods
    
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
      },
      
      getAge: function() {
        // let diff = new Date().getYear() - this.birthdate.getYear();
        // console.log(`Current age ${diff}`);
        return `${new Date().getYear()} ${new Date().getMonth()} ${new Date().getDate()}`;
      }
       
    }, // end of instanceMethods

  });
  return Student;
};

