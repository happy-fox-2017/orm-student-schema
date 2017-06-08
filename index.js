"use strict"

const repl = require('repl');
const models = require('./models');

const Student = models.Student;

const createStudent = () => {
  Student.create({
    first_name: 'Yusuf',
    last_name: 'Arifien',
    gender: 'Male',
    birthday: new Date(),
    email: 'myyusuf1911@gmail.com',
    phone: '0818856570',
  })
  .then(() => {
    console.log('Student created!');
  });
};


const readStudents = () => {
  models.Student.findAll()
  .then((rows) => {
    rows.forEach((row) => {
      console.log(row.getFullName());
    });
  });
};

const initializeContext = (context) => {
  context.readStudents = readStudents;
  context.createStudent = createStudent;
};

const r = repl.start({ prompt: '> ' });
initializeContext(r.context);
