// em um carrinho de compras temos alguns produtos
// esses produtos tem um preço
// porém tivemos um reajust nos impostos e agora precisamos ajustar o preço de cada um
// o preço atualizado de cada um é de 110% do preço original
// mostre uma lista nova com os preços atualizados

const compra = [
  {
    name: 'cerveja',
    preço: 3.5
  },
  {
    name: 'cachaça',
    preço: 20.00
  },
  {
    name: 'linguiça',
    preço: 15.00
  },
  {
    name: 'contra-filé',
    preço: 40.00
  },
  {
    name: 'carvão',
    preço: 10.00
  },
  {
    name: 'coca-cola',
    preço: 12.00
  },
]

// transformar valor em 110% é só multiplicar por 1.1

const resultado01 = compra.map(item => {
  const novoPreco = item.preço * 1.1
  return {
    ...item, preço: novoPreco
  }
})
console.log("resultado01: ", resultado01)


//----------------------------------------------
// criar uma nova lista de objetos porém com um formato diferente
// cada objeto deve ter uma propriedade "nomeCompleto" juntando o nome e o sobrenome
// e outra propriedade "dataDeNascimento" juntando o dia o mes e o ano separado por "/"

const alunosPresentes = [
  {
    nome: "Cleiton",
    sobrenome: "Melo",
    diaDoNascimento: 10,
    mesDoNascimento: 02,
    anoDoNascimento: 2003,
  },  
  {
    nome: "Zé",
    sobrenome: "da Farofa",
    diaDoNascimento: 15,
    mesDoNascimento: 06,
    anoDoNascimento: 1995,
  },  
  {
    nome: "Adelaide",
    sobrenome: "Pinto",
    diaDoNascimento: 23,
    mesDoNascimento: 09,
    anoDoNascimento: 1982,
  },
  {
    nome: "Dolores",
    sobrenome: "de Oliveira",
    diaDoNascimento: 04,
    mesDoNascimento: 10,
    anoDoNascimento: 1997,
  },
  {
    nome: "Catarina",
    sobrenome: "Barbosa",
    diaDoNascimento: 09,
    mesDoNascimento: 12,
    anoDoNascimento: 1985,
  }
]

//const resultado02 = alunosPresentes.map(item => {
  //return { 
  //  ...item, nome: item.nome + item.sobrenome
 // }
//})
  //console.log("resultado02: ", resultado02)

  const resultado03 = alunosPresentes.map(pessoa => pessoa.nome + pessoa.sobrenome)
console.log("resultado03: ", resultado03)

//-----------------------------------------------
// a partir da lista de empregados, crie uma nova lista de objetos, cada um contendo
// "nome", o nome da pessoa
// "salarioAnual", calculado a partir do salario
// "idade", calculado a partir do ano de nascimento

const empregados = [
  {
    nome: "Cleiton",
    salario: 3000,
    anoDoNascimento: 2003,
  },  
  {
    nome: "Zé",
    salario: 1200,
    anoDoNascimento: 1995,
  },  
  {
    nome: "Adelaide",
    salario: 4500,
    anoDoNascimento: 1982,
  },
  {
    nome: "Dolores",
    salario: 7000,
    anoDoNascimento: 1997,
  },
  {
    nome: "Catarina",
    salario: 2300,
    anoDoNascimento: 1985,
  }
]

const exemploDeObjeto = {
  nome: "Bernardo",
  salarioAnual: 50000,
  idade: 24
}

const resultado05 = empregados.map(item => {
  return {
  nome: item.nome,
  salarioAnual: item.salario * 12,
  idade: 2022 - item.anoDoNascimento
}
})
console.log("resultado05: ", resultado05)