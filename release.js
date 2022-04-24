/**
 * Calcula la cantidad dada de números primos.
 * @param {number} cantidad
 * @returns {Array}
 */
export function listaPrimos(cantidad) {
    let numerosPrimos = [];
    
    let cursor = 1;

    while (numerosPrimos.length != cantidad) {
    
        let cantidadDivisores = [];

        for (let i = 1; i < cursor+1; i++) {

            // Encontrar cantidad de divisores por cada número
            let division = cursor / i;    
            let esLaDivisionEntera = division % 1 == 0;
    
            if (esLaDivisionEntera) {
                cantidadDivisores.push(i);
            }

            // Si durante el calculo surgen más de dos divisores, no es primo
            if (cantidadDivisores.length > 2) {
                break;
            }
        }

        if (cantidadDivisores.length == 2) {
            numerosPrimos.push(cursor);
        }

        // Resetear estas variables para el próximo número
        cantidadDivisores = [];
        cursor += 1;

    }

    return numerosPrimos;
}
