describre('Api Test - Get Users', ()=>{
  const baseUrl = 'http://localhost:3000/api'

  it('Deve Obter todos Usuário', () =>{
    crypto.request({
      method:'GET',
      url:`${baseUrl}/usuario/all`,
      failOnStatusCode: false
    }).then((response)=>{
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(1)
    })
  })

})