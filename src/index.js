const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';
const request = new XMLHttpRequest()
// Reto 3 resolviendo reto con promesas

const fetchData = (url_api) => {
  return new Promise((sePudo, todoMal) =>{
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status == 200)
        sePudo(JSON.parse(request.responseText));
        else return todoMal(url_api);
      }
    };
    request.open('GET', url_api, false);
    request.send();
  })
}

fetchData(API)
  .then(data => {
    data1 = data;
    console.log(`Primer llamado...`);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    data2 = data;
    console.log(`Segundo llamado...`);
    return fetchData(`${data.origin.url}`);
  })
  .then(data => {
    data3 = data;
    console.log(`Tercer llamado...`)
    console.log(`Personajes: ${data1.info.count}`);
    console.log(`Primer personaje: ${data2.name}`);
    console.log(`Dimensión: ${data3.dimension}`);
  })
  .catch(`Error`)

