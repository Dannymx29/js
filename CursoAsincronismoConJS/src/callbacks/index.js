//el callback es la referencia de la funcion que vamos a llamar puede llevar cualquiernombre
function calc(num1, num2,callback){
    return callback(num1, num2);
};

function sum(num1, num2){
    return num1 + num2;
}
//se llama la duncion sin () ya que si no la llamos en lugar de usarla
console.log(calc(2, 2, sum));

//SetTimeout temporizadores para ejecucuin de codigo

setTimeout(function () {
    console.log('viendo a detalle las funciones')
}, 10000);

function bienvenido(name){
    console.log(`Bienvenido ${name}`);
}

setTimeout(bienvenido, 2000, 'Daniel');