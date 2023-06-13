const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


chai.use(chaiHttp);


describe('Probando respuesta del servidor para metodo GET /animes', () => {
  it('Comprobando que metodo GET responde con codigo 200', (done) => {
    chai.request(app)
      .get('/animes')
      .end((error, response) => {
        chai.expect(response).to.have.status(200);
        done();
      });
  });
});