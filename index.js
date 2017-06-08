"use strict"

const db = require('./models')

var all = () => db.Student.getAllData(function(students) {
  students.forEach(function(student) {
    console.log(student.id + '.')
    console.log(student.first_name)
    console.log(student.last_name)
    console.log(student.getFullName())
    console.log(student.getAge());
    console.log('\n');
  })
})
all();