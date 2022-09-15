/*Crie uma um programa de saúde, nesse programa desenvolva 
uma função que calcula o imc de pacientes, a função deverá receber
 os  seguintes parâmetros, peso e altura.
*/

const prompt = require ('prompt-sync')()
const calculoImc = require ('./calculoimc')

const altura = Number(prompt('Digite aqui a sua altura: '))
const peso = Number(prompt('Digite aqui o seu peso'))

const imc = calculoImc (peso,altura);

console.log(`O resultado do seu imc é de ${imc}`)