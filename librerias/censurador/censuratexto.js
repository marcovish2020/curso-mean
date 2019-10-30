var palabrasCensuradas = ["malo","bobo","lelo"];
var palabrasCensuradasPersonalizadas = [];
function censura(cadenaEntrada){
    for(indice in palabrasCensuradas){
        cadenaEntrada =  cadenaEntrada.replace(palabrasCensuradas[indice],"****");
    }
    for(indice in palabrasCensuradasPersonalizadas){
        cadenaEntrada =  cadenaEntrada.replace(palabrasCensuradasPersonalizadas[indice],"****");
    }
    return cadenaEntrada;
}
function agregaPalabraCensurada(palabra){
    palabrasCensuradasPersonalizadas.push(palabra);
}
function obtienePalabrasCensuradas(){
    return palabrasCensuradas.concat(palabrasCensuradasPersonalizadas);
}

exports.censura = censura;
exports.agregaPalabraCensurada = agregaPalabraCensurada;
exports.obtienePalabrasCensuradas = obtienePalabrasCensuradas;