//console.log('Activo');

document.querySelector('#Json').addEventListener('click', Datos);

function Datos(){

    //console.log('btn activo');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);

            let data = JSON.parse(this.responseText);

            let res = document.querySelector('#res');

            res.innerHTML = '';

            //console.log(data);

            for(let item of data){

                //console.log(item.artista);

                res.innerHTML += `
                    <tr>
                        <td>${item.titulo}</td>
                        <td>${item.artista}</td>
                    </tr>
                `

            }

        }
    }
}