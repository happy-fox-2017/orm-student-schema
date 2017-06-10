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
      console.log(`Student birthday: ${Students.birthday}`);
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