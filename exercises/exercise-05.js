// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr

console.log(x);
console.log(y);

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
function soma (...numeros){
    return numeros.reduce((numero, index) => numero + index )
}
console.log(soma(1, 2, 3, 4, 5, 6)); 

/*
------ 5.2
*/

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

var usuario2 = {...usuario, nome: "wilian"}
console.log(`Usuário2 é ${JSON.stringify(usuario2)}` );

var usuario3 = {...usuario, endereco:{ ...usuario.endereco, cidade: "Lontra"}}
console.log(`Usuário3 é ${JSON.stringify(usuario3)}` );





   
