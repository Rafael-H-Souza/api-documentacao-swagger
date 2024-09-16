describe('Api Test - Get Users', () => {
  const baseUrl = 'http://localhost:3000/api';

  it('Deve obter todos os usuários', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/usuario/all`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(1);
    });
  });

  it('Deve obter usuário por ID', () => {
    const userId = 2;

    cy.request({
      method: 'GET',
      url: `${baseUrl}/usuario/getById/${userId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', userId);
      expect(response.body).to.have.property('nome');
    });
  });

  it('Deve retornar 404 para usuário não encontrado', () => {
    const userId = 50;

    cy.request({
      method: 'GET',
      url: `${baseUrl}/usuario/getById/${userId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('message', 'Usuário não encontrado');
    });
  });
});
