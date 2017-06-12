"use strict"
const db = require('./models');
const repl = require('repl');

let replStart = repl.start({
  prompt: '>>> ',
  input: process.stdin,
  output: process.stdout
});

function getAge() {
  db.Student.findAll()
  .then(Students => {
    Students.forEach(Students => {
      console.log(Students.getAge());
    });
  });
}

function getFullName() {
  db.Student.findAll()
  .then(Students => {
    Students.forEach(Students => {
      console.log(Students.getFullName());
    });
  });
}

function getAllData() {
  db.Student.findAll()
  .then(Students => {
    Students.forEach(Students => {
      console.log(`Student ID: ${Students.id}`);
      console.log(`Student ${Students.getFullName()}`);
      console.log(`Student gender: ${Students.gender}`);
      console.log(`Student birthdate: ${Students.birthdate}`);
      console.log(`Student email: ${Students.email}`);
      console.log(`Student phone number: ${Students.phone}`);
      console.log(`\n`);
    })
  })
}

function createData(object) {
  db.Student.create(object)
  .then( () => {
    console.log("Data added");
  })
  .catch(err => {
    console.log(err.message);
  })
}

replStart.context.getAge = getAge;
replStart.context.getFullName = getFullName;
replStart.context.getAllData = getAllData;
replStart.context.createData= createData;

//Testcase


//createData({first_name: "Alvita", last_name: "Vidya Indriyana", gender: "Female", birthday: "1999-08-12", email: "alvita@gmail.com", phone: "1876489287382", height: 145})


// "use strict"
// 
// const db = require ('./models');
// const repl = require ('repl');
// const replStart = repl.start('ACTION >>');
// 
// function getAge(){
//   db.Student
//   .findAll()
//   .then(Students => {
//     Students.forEach(Students => {
//       console.log(Students.getAge());
//     })
//   })
// }
// 
// function getFullName() {
//   db.Student
//   .findAll()
//   .then(Students => {
//     Students.forEach(Students => {
//       console.log(Students.getFullName());
//     })
//   })
// }
// 
// function getAllData(){
//   db.Student
//   .findAll()
//   .then(Students => {
//     Students.forEach(Students => {
//       console.log(`Student ID : ${Students.id}`);
//       console.log(`Student Name : ${Students.getFullName()}`);
//       console.log(`Student Gender : ${Students.gender}`);
//       console.log(`Student Birthday : ${Students.birthdate}`);
//       console.log(`Student Email : ${Students.email}`);
//       console.log(`Student Phone Number : ${Students.phone}`);
//       console.log(`Student Height : ${Students.height} cm`);
//       console.log('\n');
//     })
//   })
// }
// 
// function addStudent(object) {
//   db.Student.create(object)
//   .then(() => {
//     console.log('Data student added');
//   })
//   .catch(err => {
//     console.log(err.message);
//   })
// }
// 
// replStart.context.getAge = getAge
// replStart.context.getFullName = getFullName
// replStart.context.getAllData = getAllData
// replStart.context.addStudent = addStudent 
// 
// addStudent({first_name:'Dian', last_name:'Wiseka', gender:'Female', birthdate:'1989-21-01', email:'dianwiseka@yahoo.com', phone:'081315247654'})
// 
// 
// // function getNameAndAge() {
// //   db.Student
// //   .findAll()
// //   .then(students => {
// //     students.forEach(student => {
// //       console.log(`${student.getFullName()}`);
// //     })
// //   })
// //   .catch(error => {console.log(error);
// //   })
// // }
// 
// // function getWashes() {
// //   db.Wash
// //   .findAll()
// //   .then(washes => {
// //     washes.forEach(w => {
// //       console.log(`${w.id} ${w.number} ${w.getPrice()}`);
// //     })
// //   })
// //   .catch(error => { console.log(error) });
// // }
// 
// // 
// // 
// // function getAge() {
// //   db.Students.findAll()
// //   .then(Students => {
// //     Students.forEach(Students => {
// //       console.log(Students.getAge());
// //     });
// //   });
// // }
// 
// 
// // replStart.context.getNameAndAge = getNameAndAge;
// // replStart.context.getAllData=db.Student.getAllData;
