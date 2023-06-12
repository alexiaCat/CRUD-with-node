const chai = require('chai');
const app = require('../app');

describe('Probando respuesta del servidor para metodo DELETE /animes/:id', () => {
    it('Comprobando que metodo DELETE responde con codigo 200', (done) => {
        const animeId = 1; 

        chai.request(app)
            .delete('/animes/' + animeId)
            .end((error, response) => {
                chai.expect(response).to.have.status(200);
                done();
            });
    });
});
