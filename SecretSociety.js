/*Encuentra el nombre de una sociedad secreta basándose en la primera letra del nombre de cada miembro.
 

Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` . */

let nombres = [
    (["Esperanza", "Franco", "Nia"]),
    (['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']),
    (['Harry', 'Ron', 'Hermione'])
]

function secretSociety(nombres) {
    let resultado = "";

    nombres.forEach((nombre) => {
        nombre.sort();
        nombre.map((secretName) => {
            resultado += secretName[0];
        });
    });
    return resultado;
}


console.log("El nombre de la sociedad secreta de Esperanza, Franco y Nia es 👁️‍🗨️: " + (secretSociety([["Esperanza", "Franco", "Nia"]])));
console.log("El nombre de la sociedad secreta de Phoebe, Ross, Chandler, Joey, Mónica y Rachel es 👁️‍🗨️: " + (secretSociety([['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']])));
console.log("El nombre de la sociedad secreta de Harry, Ron y Hermione es 👁️‍🗨️: " + (secretSociety([['Harry', 'Ron', 'Hermione']])));