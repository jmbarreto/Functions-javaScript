function calculoImc (peso,altura){
    const resultadoImc = peso/Math.pow (altura,2)
    return resultadoImc
    

}
module.exports = calculoImc