"use strict"

const db = require('./models')
const repl = require('repl')
let replServer = repl.start({
  prompt: 'play>',
  input: process.stdin,
  output: process.stdout
})

function addStudent(first_name, last_name, gender, email, height, phone, birthday){
  let createdAt = new Date()
  let updatedAt = new Date()
  db.Student.create({
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    email: email,
    height: height,
    phone: phone,
    birthday: new Date(birthday),
    createdAt: createdAt,
    updatedAt: updatedAt
  }).then(()=> {
    console.log(`${first_name} inserted!`)
  }).catch((err)=> {
    console.log(err.message);
  })
}

function AllStudentData() {
  db.Student.allData((s)=> {
    s.forEach((w)=> {
      console.log(w.id)
      console.log(w.first_name);
      console.log(w.last_name);
      console.log(w.full_name);
    })
  })
}

function AllStudentAge() {
  db.Student.allAge((s)=> {
    s.forEach((w)=> {
      console.log(`${w.full_name} was ${w.age} years old, birthday is ${w.birthday}`);
    })
  })
}

function help() {
  console.log(`\n==============================================================================================================`);
  console.log(`                                              ------- HELP -------        `);
  console.log(`==============================================================================================================`);
  console.log(`addStudent(firstname(str), lastname(str), gender(str), email(str), height(int), phone(string), birthday(date))`);
  console.log(`AllStudentData()`);
  console.log(`AllStudentAge()`);
}

replServer.context.help = help();
replServer.context.help = help;
replServer.context.addStudent = addStudent;
replServer.context.AllStudentData = AllStudentData;
replServer.context.AllStudentAge = AllStudentAge;