"use strict"
const db = require('./models');

function getAge() {
  db.Student.findAll()
  .then(Student => {
    Student.forEach(Student => {
      console.log(Student.getAge());
    });
  });
}

let all = db.Student.getAllData((Student) => {
  Student.forEach((Student
  ) => {
    console.log(Student.id);
    console.log(Student.firstname);
    console.log(Student.lastname);
    console.log(Student.fullname);
    console.log(Student.gender);
    console.log(Student.birthday);
    console.log(Student.email);
    console.log(Student.phone);
    //console.log(Student.height);
  });
});

function addStudent() {
  db.Student.create({
    first_name : 'Lita',
    last_name  : 'Liani',
    gender     : 'Wanita',
    birthday   : new Date('1994-11-11'),
    email      : 'lita@gmail.com',
    phone      : '08948563kkfasw',
    createdAt  : new Date(),
    updatedAt  : new Date(),
    height     : 162
  }).then(Student => {
    console.log('Success');
  }).catch(err => {
    console.log("Error : " + err.message);
  });
}


const repl = require('repl');
const replServer = repl.start(">>");
replServer.context.getAge = getAge
replServer.context.addStudent = addStudent
