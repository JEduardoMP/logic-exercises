const reverseInt = (number) => {
    // Validamos que cumpla con los requisitos
    if (typeof number === 'number' && number < 0) {
        // Convertimos el valor a string
        let toStringNum = number.toString();
        // Separamos, hacemos reversa y unimos de nuevo los valores
        let separate = toStringNum.split('').reverse();
        let joinStr = separate.join('');
        // Convertimos el valor a numero
        let numLikeNum = parseInt(joinStr);
        let negativeNum = numLikeNum*-1
        // Retornamos la respuesta
        return negativeNum;
    } else if (typeof number === 'number' && number > 0) {
        // Convertimos el valor a string
        let toStringNum = number.toString();
        // Separamos, hacemos reversa y unimos de nuevo los valores
        let separate = toStringNum.split('').reverse();
        let joinStr = separate.join('');
        // Convertimos el valor a numero
        let numLikeNum = parseInt(joinStr);
        // Retornamos la respuesta
        return numLikeNum;
    }else {
        throw new Error('No es un dato numerico')
    }
}
module.exports = {
    reverseInt
}