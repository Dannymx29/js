//console.log('Activo');

document.querySelector('#btnAjax') .addEventListener('click', Datos);

function Datos(){
    console.log('click listo');

    const xhttp = new XMLHttpRequest();


    xhttp.open('GET', 'archivo.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.querySelector('#respuesta').innerHTML = this.responseText;
        }
    }
}