function divisibleByLeft(n) {
    //Implementación
    const str = n.toString();
    const separate = str.split('');
    let container = [];
    for (let i = 0; i < separate.length; i++) {
        if (i === 0){
            container.push(false);
        } else if (separate.length <= 1) {
            container.push(false)
        } else if (parseInt(separate[i]) % parseInt(separate[i-1]) === 0) {
            container.push(true)
        } else {
            container.push(false);
        }
    }
    return container
}

module.exports = divisibleByLeft;