/*Hacer un programa que itere por los numeros del 0 al 10 y por cada uno de ellos que imprima y nos diga si el numero es par o impar*/

let i = 0 
for (i; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i + " número par")
    }else {
    console.log(i + " número impar")
    }
}