// Piedra papel o tijera con if

var pi = "Piedra";
var pa = "Papel";
var ti = "Tijera";

operador = pi;
cpu = ti;


var resultado = (operador, cpu);{   
    if (operador === cpu)
            {console.log("Empate");}

    else if(operador === pi && cpu === ti)
            {console.log("Gano Operador");}

    else if(operador === pa && cpu === pi)
            {console.log("Gano Operador");}

    else if(operador === ti && cpu === pa)
            {console.log("Gano Operador");}
            
    else {console.log("Gano CPU");}
};

// Piedra papel o tijera con switch

var pi = "Piedra";
var pa = "Papel";
var ti = "Tijera";

operador = pi;
cpu = ti;


var caso = (operador , cpu);{
    switch (operador !== cpu){
        //Empates
        case (operador === ti && cpu === ti):
            console.log("Empate");
        break;
        case (operador === pa && cpu === pa):
            console.log("Empate");
        break;
        case (operador === pi && cpu === pi):
            console.log("Empate");
        break;

        //Gana Operador
        
        case (operador === ti && cpu === pa):
            console.log("Gano Operador");
        break;

        case (operador === pi && cpu === ti):
            console.log("Gano Operador");
        break;

        case (operador === pa && cpu === pi):
            console.log("Gano Operador");
        break;

        //Gana CPU

        case (operador === ti && cpu === pi):
            console.log("Gano CPU");
        break;

        case (operador === pi && cpu === pa):
            console.log("Gano CPU");
        break;

        //case (operador === pa && cpu === ti):
        //    console.log("Gano CPU");
        //break;
        
        default:
            console.log("Gano CPU");
        break;
    }
};





//var pi = "Piedra";
//var pa = "Papel";
//var ti = "Tijera";
//var res;

//operador = pi;
//cpu = ti;


//var resultado = (operador, cpu);{   
//    if (operador === cpu)
//            {res = ("Empate");}

//    else if(operador === pi && cpu === pa)
//            {res = ("Gano CPU");}

//    else if(operador === pi && cpu === ti)
//            {res = ("Gano Operador");}

//    else if(operador === pa && cpu === pi)
//          {res = ("Gano Operador");}

//    else if(operador === pa && cpu === ti)
//            {res = ("Gano CPU");}

//    else if(operador === ti && cpu === pi)
//            {res = ("Gano CPU");}

//    else if(operador === ti && cpu === pa)
//            {res = ("Gano Operador");} 
//};

//console.log(res);