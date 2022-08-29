var miNombre; //Declarar variable
miNombre = "Diego"; //Inicializarla


hey();

function hey(){
    console.log("Hola" miNombre);
}

//var miNombre = undefined;
//undefined
//console.log(miNombre);
//VM676:1 undefined
//undefined
//miNombre = "Diego";
//'Diego'
//console.log(miNombre);
//VM780:1 Diego
//undefined
//var miNombre = undefined;

//console.log(miNombre);

//miNombre = "Diego";
//VM784:3 undefined
//'Diego'
//var miNombre = undefined;

//console.log(miNombre + " Soy ese hosting");

//miNombre = "Diego";
//VM846:3 undefined Soy ese hosting
//'Diego'



// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, al momento de qe se genere el hosting, las funciones se declarán primero, y despues las variables.


// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
console.log(miNombre);

var miNombre = "Diego";

// Lo que sucede con el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";


// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

// Lo que sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';