//const primeiroNome = "Bernardo ";
//const nomeDoMeio = "Bruno ";
//const sobrenome = "Pereira Lopes";

//function GeraNomeCompleto(nome1, nome2, nome3){ 
 // const nomeCompleto = nome1 + nome2 + nome3; 
 // return nomeCompleto;
//}

//var teste = GeraNomeCompleto(primeiroNome,nomeDoMeio, sobrenome)console.log(teste);

//console.log( GeraNomeCompleto(primeiroNome,nomeDoMeio, sobrenome) );

// criar uma função pra cada operação básica de uma calculadora
// soma 1+1 
// subtracao 1-1
// multiplicacao 1*1
// divisao 1/1
// executem a função e mostra num console.log o resultado da operação

function soma(a, b) {
  var soma = a + b;
  return soma;
}
var somaUm = soma(2, 5);
console.log(somaUm);


function subtracao(a, b) {
  var sub = a - b;
  return sub;
}
var subUm = subtracao(30, 15);
console.log(subUm);


function multiplicacao(a, b) {
  var mult = a * b;
  return mult;
}
var multUm = multiplicacao(20, 100);
console.log(multUm);


function divisao(a, b) {
  var div = a / b;
  return div;
}
var divUm = divisao(80, 2);
console.log(divUm);
