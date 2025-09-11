var username = "Yayoshi"; //La variable.
let lastname2 = "Laufey";  //Otra "forma" de poner variables.

username = 'anatomia';   //Le doy otro valor a la variable username.

const PI = 3.1415;      //Como no cambia su valor, es una constante.


console.log(username, lastname2)

// camelcase: Escribir la mayúscula por cada palabra.

let NombreDePersona = 'gordon';





//OPERADORES: 



let numberOne = 60;
let numberTwo = 100;

let result = numberOne * numberTwo;

console.log(result)

 //Concatenación.

let name = 'Yael';
let lastname = 'Paulin';

let completeName = name + ' ' + lastname; 

console.log(completeName)


//Comparación

let resultado = numberOne > numberTwo;  

console.log(resultado)


//Comparación 2:

let passwordDB = 'Milly1234';

let input = 'Milly1234';

let resultComparacion = passwordDB == input;

console.log(resultComparacion);


// CONDICIONALES: 

if (resultComparacion === true) {
    
    console.log("Login Correcto");
} else {
    console.log("Contraseña Incorrecta")
}

// Condicional ejemplo 2:

let score = 0;

if(score > 30) {
    console.log("Felicidades, tu puntuación es alta");

} else if( score >15){
    console.log("Ya estas mejorando");
}

 else{
    console.log("Tu puntuación es super baja");
}


// CONDICIONAL SWITCH

let typeCard = 'No Card';

switch(typeCard ){
    case 'Debit Card':
        console.log("Tienes una tarjeta de débito");
        break;

    case 'Credit Card':
        console.log('Tienes una tarjeta de crédito');
        break;

    default:
        console.log("You don´t have anything, you're broken");

}

// ITERADOR Ó BUCLES:
let count = 50;
let contar = 0

while(count >= 0){
    console.log(count);
    count = count -1;
}

while(contar <= 50){
    console.log(contar);
    contar++;
}

let names = ["Yael", "Abidel", "Maneloco"];

console.log(names[2]);  //Se le llama al indice al elemento donde se guardó

console.log(names.length)   //Dar la longitud del arreglo creado

//EJEMPLO DE ARREGLO PARA MOSTRAR LOS DATOS DEL ARREGLO GUARDADOS
//UTILIZANDO UN FOR

for( let index = 0; index < names.length; index++){
    
    console.log(names[index]);
}


function greeting(adios){
    console.log('Holas' + adios);
}

greeting("Tuntunsahur");
greeting("Tuntunsahur");
greeting("Tuntunsahur");


function add(n1, n2){
    console.log(n1 * n2);
}

add(3, 2);
add(3, 2);
add(3, 2);
add(3, 2);



