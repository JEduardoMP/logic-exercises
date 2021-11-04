const capitalizeLetters = (str) => {
    //Implementación

    // Separamos el texto por cada espacio que se encuentre
    let separateWord = str.split(' ');
    // Creamos una variable para recorrer el array anterior la cual retornará
    // cada frase con la primera letra mayúscula
    let toUpper = separateWord.map(word => {
        // Separamos el texto
        let splitWord = word.split('');
        // Cortamos la primera letra
        let getLetter = splitWord.slice(0, 1);
        // Volvemos la primera letra mayúscula;
        let upperLetter = `${getLetter}`.toUpperCase();
        // Agregamos la nueva letra al array splitWord
        let addUpperLetter = splitWord.splice(0, 1, `${upperLetter}`);
        // Retornamos el valor de splitWord el cual tiene los cambios anteriores
        // y lo unimos para regresar la frase completa
        return splitWord.join('');
    })
    // Retornamos el valor del array obtenido en el map uniendolo con 
    // espacio entre retorno
    return toUpper.join(' ');
}

module.exports = {
    capitalizeLetters
}