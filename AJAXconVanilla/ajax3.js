//document.querySelector('#dolar').addEventListener('click', function(){
//    taza('dolar');
//});

document.querySelector('#uf').addEventListener('click', function(){
    taza('uf');
});

function taza(valor){

    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();

    api.open('GET', url, true);

    api.send();

    api.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            console.log(data.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            let i = 0;

            for (let item of data.serie){
                i++;
                resultado.innerHTML += `<li>${i}.- En la fecha ${item.fecha.substr(0,10)} tenia un valor de --> ${item.valor} ${valor}es</li>`;
                if (i>9){
                    break;
                }
            }
        }
    }

    
}
