//Reescrever toRoman

// 01 - I
// 04 - IV
// 05 - V
// 09 - IX
// 10 - X
// 40 - XL
// 50 - L
// 100 - C
// 500 - D
// 1000 - M

const unidades = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const dezenas = {
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC",
};

const centenas = {
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM",
};

const milhar = {
  1: "M",
  2: "MM",
  3: "MMM",
};

function toRoman(num) {
  let algarismoRomano = "";

  const numeroDeCentenas = parseInt(num / 100);
  const calculaDezenas = num - numeroDeCentenas * 100;
  const numeroDeDezenas = parseInt(calculaDezenas / 10);
  const numeroDeUnidades = num - numeroDeCentenas * 100 - numeroDeDezenas * 10;
  
   
  if (numeroDeCentenas) {
      // adiciono a centena se existe
    algarismoRomano = `${centenas[numeroDeCentenas]}`;
  }
  if (numeroDeDezenas) {
      // adiciono a dezena se existe
    algarismoRomano += `${dezenas[numeroDeDezenas]}`;
  }
  // sempre adiciono a unidade ja que nao tem como um numero sem unidade
  if (numeroDeUnidades) {
    algarismoRomano += `${unidades[numeroDeUnidades]}`;
  }
  
  

  return algarismoRomano;
}
  
  
  
  
/* Não modificar deste ponto para baixo */





/* Teste */

const test = (value, expected) => {
  const result = toRoman(value);
  if (result === expected)
    console.log(`✓ Teste ${value} correto`);
  else
    console.log(`✗ Teste ${value} incorreto. Esperado ${expected}, obtido ${result}`);
};

function testa() {
  test(1, "I");
  test(2, "II");
  test(3, "III");
  test(4, "IV");
  test(5, "V");
  test(6, "VI");
  test(7, "VII");
  test(8, "VIII");
  test(9, "IX");

 test(10, "X")
 test(12, "XII")
 test(15, "XV")
 test(18, "XVIII")
 test(19, "XIX")
 test(29, "XXIX")
 test(38, "XXXVIII")
 test(47, "XLVII")
 test(56, "LVI")
 test(65, "LXV")
 test(74, "LXXIV")
 test(83, "LXXXIII")
 test(92, "XCII")

 test(120, "CXX")
 test(440, "CDXL")
 test(999, "CMXCIX")

 test(2022, "MMXXII")
}

testa();