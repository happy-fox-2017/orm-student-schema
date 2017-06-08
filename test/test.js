const assert = require('assert');
const models = require('../models');

const Student = models.Student;

const STUDENT_FIRST_NAME = 'Yusuf';
const STUDENT_LAST_NAME = 'Arifien';

describe('Student', function() {

  describe('#create()', function() {
    before(function (done) {
      Student.destroy({ where: {} }).then(() => done());
    });

    it('should create student without error', function (done) {
      Student.create({
        first_name: STUDENT_FIRST_NAME,
        last_name: STUDENT_LAST_NAME,
        gender: 'Male',
        birthday: new Date(),
        email: 'myyusuf1911@gmail.com',
        phone: '0818856570',
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });

  describe('#getAllData()', function() {

    before(function (done) {
      Student.destroy({ where: {} })
      .then(() => {
        return Student.create({
          first_name: STUDENT_FIRST_NAME,
          last_name: STUDENT_LAST_NAME,
          gender: 'Male',
          birthday: new Date(),
          email: 'myyusuf1911@gmail.com',
          phone: '0818856570',
        });
      })
      .then(() => done());
    });

    it('should return students with full_name property', function (done) {
      Student.getAllData()
      .then((data) => {
        if (data.length > 0) {
          const student = data[0];
          assert.equal(true, Object.prototype.hasOwnProperty.call(student, 'full_name'));
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
    });

    it('should return a student with a particular full_name', function (done) {
      Student.getAllData()
      .then((data) => {
        if (data.length > 0) {
          const student = data[0];
          assert.equal(`${STUDENT_FIRST_NAME} ${STUDENT_LAST_NAME}`, student.full_name);
        }
        done();
      })
      .catch((err) => {
        done(err);
      });
    });
  });
});