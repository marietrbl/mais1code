// imagina q vc vai dar um role

// para se arrumar vc leva algum tempo

// o objeto1 tem o tempo que vc demora para tomar banho

// o objeto2 tem o tempo que vc demora pra colocar roupa

// o objeto3 tem o tempo que vc demora pra escovar e pentar o cabelo


const objeto1 = {
  tempoDoBanho: 10
}

const objeto2 = {
  tempoPraRoupa: 3
}

const objeto3 = {
  tempoDeEscovar: 2,
  tempoDePentearOCabelo: 3
}

const resultado = {
  tempoTotal: 0,
}

resultado.tempoTotal= objeto1.tempoDoBanho + objeto2.tempoPraRoupa + objeto3.tempoDeEscovar + objeto3.tempoDePentearOCabelo


//fazer o resultado.tempoTotal ter o tempo total de se arrumar pro role
//não pode somar os tempos usando os números diretamente

//não pode alterar o console.log
console.log(resultado.tempoTotal)


const cadastro = {
  email: 'mariaclara@teste.com',
  senha: '123456',
  cpf: '123.456.789-00',
  nacionalidade: 'brasil',
  idade: '20'
}

const cadastro2 = {}

// cadastro2.email = 'mariaclara@teste.com',
// cadastro2.senha = '123456',
// cadastro2.cpf = '123.456.789-00',
// cadastro2.nacionalidade = 'brasil',
// cadastro2.idade = '27'

//cadastro2 = cadastro
//cadastro2.email = 'mariaclara@teste.com'

cadastro2 = {...cadastro, email: 'mariaclara@teste.com'}

console.log(cadastro)
console.log(cadastro2)

