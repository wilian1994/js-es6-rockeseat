const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   //MAP
   var idades = usuarios.map(element => element.idade)
   console.log(`Idades: ${idades}`)

   //FILTER
   var usuarioFilter = usuarios.filter(element =>  element.empresa === 'Rocketseat').filter(element => element.idade > 18)
   console.log(`Usuário Filter: ${usuarioFilter}`)
   
   //FIND
   var usuarioFind = usuarios.find(element => element.empresa === "Google")
   console.log(`Usuário Find: ${usuarioFind}`)

   //2.4  - Unindo operações
   var usuarioUnion = usuarios.map(element => ({...element, idade: element.idade * 2 }))
                     .filter(element => element.idade < 50)
   console.log(`Usuário Find: ${usuarioUnion}`)
