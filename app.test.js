const request = require('supertest');
const app = require('./index');

test('app:GET /fibonacci/1', done => {
  request(app)
    .get('/fibonacci/1')
    .expect(200, {"position": 1, "value": 1})
    .end((err, res) => {
      done(err);
    });
});

test('app:GET /fibonacci/-1', done => {
  request(app)
    .get('/fibonacci/-1')
    .expect(200, 'Not accepted')
    .end((err, res) => {
      done(err);
    });
});

test('app:GET /fibonacci/string', done => {
  request(app)
    .get('/fibonacci/string')
    .expect(200, 'Not accepted')
    .end((err, res) => {
      done(err);
    });
});
