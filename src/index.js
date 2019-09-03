

ordenaLista = (lista) => {
  lista = lista.filter(item => {
    return typeof item === 'number';
  })
  return lista.sort((a,b)=>{    
    return a-b;
  });
}

listaConsecutivos = (lista) => {
  let listaOrdenada = ordenaLista(lista);
  const resultado = [];
  let consecutivos = [];
  let ultimo = null;
  listaOrdenada.map(item => {
    if(item === ultimo + 1){
      consecutivos.push(item);
    } else {
      if(consecutivos.length >1) resultado.push(consecutivos);
      consecutivos = [];
      consecutivos.push(item);
    }
    ultimo = item;
  });
  if(consecutivos.length >1) resultado.push(consecutivos);
  return resultado;
}

msc = (lista) => {
  const listaSequencias = listaConsecutivos(lista);
  let maiorSoma = 0;
  listaSequencias.map(lista => {
    let soma = 0;
    lista.map(item => {
      soma += item;
    });
    if(soma > maiorSoma) maiorSoma = soma;
  });
  return maiorSoma;
}
