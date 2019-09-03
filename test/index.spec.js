require('mocha');
const expect = require('chai').expect;
require('../src/index.js');

describe('Aula de JS', () => {

  it('deve testar o JS', () => {

  });

  it('deve retornar uma lista de numérica ordenada', () => {
    expect(ordenaLista([3,4,6,7,8,1,9,10,13,21,14,17,20])).to.be.deep.equal([1,3,4,6,7,8,9,10,13,14,17,20,21]);    
    expect(ordenaLista([3,1,4,7,9,'a',6,8,10,14,13])).to.be.deep.equal([1,3,4,6,7,8,9,10,13,14]);
  });

  it('deve voltar um array com a lista de números consecutivos', () => {
    expect(listaConsecutivos([3,1,4,7,9,'a',6,8,10,14,13])).to.be.deep.equal([[3,4],[6,7,8,9,10],[13,14]]);
    expect(listaConsecutivos([3,1,4,7,9,6,8,10,14,13])).to.be.deep.equal([[3,4],[6,7,8,9,10],[13,14]]);
    expect(listaConsecutivos([3,4,6,7,8,1,9,10,13,21,14,17,20])).to.be.deep.equal([[3,4],[6,7,8,9,10],[13,14],[20,21]]);    
    expect(listaConsecutivos([3,4,6,7,8,1,9,10,13,21,14,17,20,25])).to.be.deep.equal([[3,4],[6,7,8,9,10],[13,14],[20,21]]);    
  });

  it('deve voltar a maior soma de números consecutivos', () => {
    expect(msc([3,1,4,7,9,'a',6,8,10,14,13])).to.be.equal(40);
    expect(msc([3,1,4,7,9,6,8,10,14,13])).to.be.equal(40);
    expect(msc([3,4,6,7,8,1,9,'abc', 10,13,21,14,17,20])).to.be.equal(41);    
  });

});
