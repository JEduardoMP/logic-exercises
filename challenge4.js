function landMass(name, area) {
    //Implementación
    
    const totalArea = (area*100)/148940000
    
    const ObjectContaining = {"message": name + ` representa el ${totalArea.toFixed(2)+'%'} de la masa de la Tierra`, "percent": totalArea.toFixed(2)}

    return ObjectContaining
}

module.exports = landMass;