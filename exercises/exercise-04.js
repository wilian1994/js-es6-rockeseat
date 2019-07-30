const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

// Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
/*
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC*/   

const {nome, endereco: {cidade}, endereco : {estado} } = empresa

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({nome, idade} = usuario){
    return `${nome} tem ${idade} anos`
}

console.log(mostraInfo({ nome: 'Wilian', idade: 24 }))