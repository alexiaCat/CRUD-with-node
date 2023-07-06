const chai = require('chai');
const app = require('../index');

describe('Probando respuesta del servidor para metodo PUT /animes/:id', () => {
    it('Comprobando que metodo PUT responde con codigo 200', (done) => {
        const animeId = 3;

        chai.request(app)
            .put('/animes/' + animeId)
            .send({
                "nombre": "Kimetsu no Yaiba",
                "genero": "Shonen",
                "año": "2016",
                "autor": "Koyoharu Gotouge"
            })
            .end((error, response) => {
                chai.expect(response).to.have.status(200);
                done();
            });
    });
});
