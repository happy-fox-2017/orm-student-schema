'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
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
        let result = new Date().getFullYear() - this.birthdate.getFullYear();
        return `Age: ${result}`;
      }
    }
  });
  return Student;
};

// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//     var Student = sequelize.define('Student', {
//         first_name: DataTypes.STRING,
//         last_name: DataTypes.STRING,
//         gender: DataTypes.STRING,
//         birthdate: DataTypes.DATE,
//         // email : DataTypes.STRING,
//         // phone: DataTypes.STRING
//         email: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           unique: true,
//           validate: {
//             len: {
//               args: [6, 128],
//               msg: "Email address must be between 6 and 128 characters"
//             },
//             isEmail: {
//               msg: "Email address must be valid"
//             }
//           }
//         },
//         phone: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           unique: true,
//           validate: {
//             isAlphanumeric: {
//               args: false,
//               msg: "Number phone is not allow Alphanumeric"
//             },
//             len: {
//               args: [8, 13],
//               msg: "Number phone must be length 8 until 13"
//             },
//             isNumeric: {
//               args: true,
//               msg: "Number phone is not allow using letter"
//             }
//           }
//         },
//         height:{
//           type: DataTypes.INTEGER,
//           validate : {
//             min:{
//               args : 150,
//               msg : 'Only 150cm above can join to this school'
//             }
//           }
//         }
//       },  {
//           classMethods: {
//             associate: function(models) {
//               // associations can be defined here
//             },
//             getAllData : function(dataAll){
//               Student.findAll()
//               .then(Students => {
//                 return dataAll(Students)
//                 })
//               }
//             },
//             
//     instanceMethods: {
//       getFullName: () => {
//           let fullName = `Fullname : ${this.first_name} ${this.last_name}`;
//           return fullName;
//       },
//       getAge: function() {
//         let result = new Date().getFullYear() - this.birthdate.getFullYear()
//         return `Age this year : ${result}`;
//         // let yearBirthdate = new Date(this.birthdate).getFullYear();
//         // let yearNow = new Date().getFullYear();
//         // return `Age this year : ${yearNow} - ${yearBirthdate}`;
//       }
//     }
//   });
//   return Student;
// };
