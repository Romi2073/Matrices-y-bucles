/*Dado un número, devuelve el número dividido en sus mitades en una matriz.

Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` . */

function numDividido(numero) {
    let división = numero/ 2;
    let mitad = división;
    return [mitad, mitad];
}

console.log(numDividido(4));
console.log(numDividido(10));
