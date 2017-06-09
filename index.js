"use strict"

const db = require('./models');
const repl = require('repl');

let replServer = repl.start('>> ');

var all = db.Student.getAllData((param)=>{
  param.forEach((paramAja)=>{
    console.log(`id        : ${paramAja.id}`)
    console.log(`First Name: ${paramAja.first_name}`);
    console.log(`Last Name : ${paramAja.last_name}`);
    console.log(`gender    : ${paramAja.gender}`);
    console.log(`Birthday  : ${paramAja.birthday}`);
    console.log(`Email     : ${paramAja.email}`);
    console.log(`phone     : ${paramAja.phone}`);
    console.log(`height    : ${paramAja.height}`);
    console.log(`age       : ${paramAja.getAge()}\n`);
  })
})

function create(){
  db.Student.create({
    first_name: 'gogon',
    last_name: 'depok' ,
    gender:'pria' ,
    birthday: '1988-04-18',
    email: 'gogon@yahoo.com',
    phone: '1234577834' ,
    height: 165})
  .then(Student => console.log('data already added!'))
  .catch(err => console.log(err.message))
}

replServer.context.create = create;
