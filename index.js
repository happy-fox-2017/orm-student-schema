"use strict"

const db = require('./models');
const repl = require('repl');

function getData() {
  db.Student
  .findAll()
  .then(data => {
    data.forEach(datas => {
      console.log(`Id           : ${datas.id}`);
      console.log(`Nama         : ${datas.full_name}`);
      console.log(`J. Kelamin   : ${datas.gender}`);
      console.log(`Umur         : ${datas.getAge()}`);
      console.log(`Tanggal Lahir: ${datas.birthday}`);
      console.log(`Email        : ${datas.email}`);
      console.log(`Telepon      : ${datas.phone}`);
    })
  })
  .catch(err => {console.log(err);});
}

// let all = db.Student.getAllData((Students) => {
//   Students.forEach((Students) => {
//     console.log(Students);
//     console.log(Students.id);
//     console.log(Students.first_name);
//     console.log(Students.last_name);
//     console.log(Students.full_name);
//     console.log(Students.gender);
//     console.log(Students.birthday);
//     console.log(Students.email);
//     console.log(Students.phone);
//     console.log(Students.height);
//   });
// });

function showName() {
  db.Student.getAllData(function(students) {
    students.forEach(function(student) {
      console.log(`${student.id}. ${student.fullname}`);
    })
  })
}

function getAge() {
  db.Student.findAll()
  .then(Students => {
    Students.forEach(Students => {
      console.log(Students.getAge());
    });
  });
}

function createStudent(obj) {
  db.Student.create(obj)
  .then(() => {
    console.log("Data berhasil diinput");
  })
  .catch(err => {
    console.log(err);
  })
}

// getData()
// getAge()
// db.Student.getAllData()
// console.log(all);

createStudent({firstname: 'Anak', lastname: 'Lama', gender: 'Male', birthdate: new Date('1986-08-22'), email: 'alama@melmelan.co.id', phone: 0385833910})

const r = repl.start('orz > ');
r.context.getData = getData;
r.context.showName = showName; 
r.context.getAge = getAge;
r.context.createStudent = createStudent