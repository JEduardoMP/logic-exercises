const reverseString = (str) => {
    // Validar que str sea un string
    if (typeof str === 'string' && str.length > 1 && str.length < 15) {
        // 
        let chartArr = str.split('').reverse();
        return chartArr.join('');
    } else {
        throw new Error('Argumento inválido')
    }
}

module.exports = {
    reverseString
}