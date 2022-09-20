const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {

    //nombramos una variable para cer un nuevo llamado al XMLHttpRequest y poderla usar de una manera mas practica
    let xhttp = new XMLHttpRequest();

    //abrimos la coneccion con el tipo de metodo la direccion de la url de la API y colocamos true para abilitarla
    xhttp.open('GET', urlApi, true);

    //aqui escucha los estados de la informacion para saber cuando esta dispoible esa informacion 
    xhttp.onreadystatechange = function (event) {

        //0 → Se ha inicializado. 1 → Loading (cargando). 2 → Se ha cargado. 3 → Procesamiento si existe alguna descarga. 4 → Completado.
        if (xhttp.readyState === 4){

            //Respuestas informativas (100–199), Respuestas satisfactorias (200–299), Redirecciones (300–399),  Errores de los clientes (400–499), y errores de los servidores (500–599).
            if (xhttp.status === 200){

                //convertimos la informacion a json
                callback(null, JSON.parse(xhttp.responseText));

            // Este else es para el manejo de la informacion cuand ocurre un error
            }else{

                const error = new Error('Error ' + urlApi);
                return callback(error, null);
    
            }

        }

    }
    
    xhttp.send();

}

//llamados de los productos

fetchData(`${API}/products`, function(error1, data1) {

    if(error1) return console.error(error1);

    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {

        if(error2) return console.error(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {

            if(error3) return console.error(error3);

            console.log(data1[0]);

            console.log(data2.title);

            console.log(data3.name);

        });

    });

});