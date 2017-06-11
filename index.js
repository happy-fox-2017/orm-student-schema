"use strict"
const db = require('./models');
const repl = require('repl');

function findFirstNameAndAge(){
  db.Student.findAll().then(students => {
    students.forEach(student =>{
      console.log(`${student.getFullName()} dengan Umur ${student.getAge()}`);
    })
  })
  .catch(err => {
    console.log(err);
  })
}

function addData() {
  db.Student.create({
    first_name : "asdasd",
    last_name : "Nugraha",
    gender : "Male",
    birthday : "1955-12-12",
    email : "antoniangga14@gmail.com",
    phone : "0812123123124",
    tinggi_badan : 150,
    createdAt : new Date(),
    updateAt : new Date()
  }).then(datas =>{
    console.log("Sukses Inserted");
  }).catch(err =>{
    console.log(err.message);
  })
}
const replServer = repl.start("> ");

replServer.context.findFirstNameAndAge = findFirstNameAndAge;
replServer.context.getAllData = db.Student.getAllData;
replServer.context.addData = addData;

