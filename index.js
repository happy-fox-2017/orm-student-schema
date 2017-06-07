"use strict"
const db = require('./models')
const repl = require('repl')
const replServer = repl.start('>> ')

function create(obj) {
  db.Student.create(obj)
  .then(student => {
    console.log(student.toJSON());
  })
  .catch(err => {
    console.log(err.message);
  })
  
}

function getData() {
  db.Student.getAllData()
  
}

replServer.context.create = create
replServer.context.getData = getData
replServer.context.Student = db.Student