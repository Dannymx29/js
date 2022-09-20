function* gen (){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();//la funcion la asignamos a una constante para abilitar el next
console.log(g.next().value);//con next podemos ir mostrando los valores que tiene la funcion en su interior
console.log(g.next().value);
console.log(g.next().value);


//funcion para recorrer un array
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan'])
console.log(it.next().value);
console.log(it.next());
console.log(it.next().value);
console.log(it.next());
console.log(it.next().value);
console.log(it.next());