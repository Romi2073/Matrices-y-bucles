/*Calcular la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver `'23.5 ohmios'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` debería devolver `'123 ohmios'`. (8 + 15 + 100 = 123)*/

function sumR(sumResistance) {
    let sumar =  sumResistance.reduce((acum, num) => acum + Math.abs(num), 0)
    return `${sumar} ohmios`;
}

console.log(sumR([-1,5,6,3]));
console.log(sumR([14,3.5,6]));
console.log(sumR([8,15,100]));
