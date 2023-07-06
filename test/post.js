const chai = require('chai');
const app = require('../app');

describe('Probando respuesta del servidor para metodo POST /animes', () => {
    it('Comprobando que metodo POST responde con codigo 201', (done) => {
        chai.request(app)
            .post('/animes')
            .send({
                "nombre": "Chainsaw Man",
                "genero": "Shonen",
                "año": "2018",
                "autor": "Tatsuki Fujimoto"
            })
            .end((error, response) => {
                chai.expect(response).to.have.status(201);
                done();
            });
    });
});