"use strict"
const db = require('./models')
const repl = require('repl')
const replServer = repl.start('>> ')

function create(obj) {
  db.Student.create(obj)
  .then(student => {
    console.log(student.toJSON());
  })
  
}

function getData() {
  db.Student.getAllData()
  
}

replServer.context.create = create
replServer.context.getData = getData