const app = require('../../app');
const request = require('supertest');
const expect = require('chai').expect;


describe('GET /user', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/api/users/100')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });