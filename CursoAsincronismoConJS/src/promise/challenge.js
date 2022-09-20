//se necesita instalar en la consolo npm i node-fetch en la carpeta para trabajar con fetch
//importamos el node-fetch
import fetch from 'node-fetch';
//generamos una cosntante con la URL de la API
const API = 'https://api.escuelajs.co/api/v1';
//esta funcion recibe la url y retorna el llamado a fetch para poder llamara los productos en espesifico
function fetchData(urlApi){
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log('err'))
    .finally(() => console.log('Finally'));

/* lista de productos
//aqui hacemos el llamado de la API y completamos la URL de lo que queremos llamar
fetchData(`${API}/products`)
    //el then muestra la respuesta del llamado y la data la convertimos a un opjeto json 
    .then(response => response.json())
    //aqui mostramos los productos 
    .then(products => {console.log(products);})
    //el catch muestra el error
    .catch(error => console.log('error'));*/