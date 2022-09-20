import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    //en esta parte vamos a decirle al fetch que va almacenar datos que esta vez no se esta haciendo una peticion para traer datos de la api si no para guardarlos dentro de la api
    const response = fetch(urlApi, {
        method: 'POST',//primero establecemos el metodo get -> para optiene post -> para enviar  pud -> para actualizar delete -> para eliminar
        mode: 'cors',//este es para los permisos de la aplicacion
        credentials: 'same-origin',//si no se asigna no hay inconveniente pero es la autenticacion
        headers:{//son las cabeceras que se envian y para que lo reconozca
            'Content-Type': 'application/json',//depende el elemento que se envia es el elemento en content-type
        },
        body: JSON.stringify(data)//aqui va la informacion que le quieres mandar a la API y se convierte de un objeto a texto en tipo JSON
    });
    //para finalizar solo retornamos el response
    return response;
}

const data = {
    "title": "212",//titulo del producto
    "price": 212,//precio
    "description": "A description",//description
    "categoryId": 1,//el id de la categoria
    "images": ["https://placeimg.com/640/480/any"]//imagen del producto
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))