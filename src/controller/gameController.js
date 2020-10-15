const games = require('../model/gameModel.json')

//get
const getAllGames = (request, response) =>{
    console.log(request.url);
    response.status(200).send(games)
}

//put
const putChangeName =  (request , response) => {
    const changeNameGame = request.body
    const id = parseInt(request.params.id) // poderia ser tbm  request.params.id apenas

    const gameRefresh = games.map(game => game.id)  // invoca uma função callback, percorre o array e retorna um novo array 

    const refreshId = gameRefresh.indexOf(id) // descobrir o indice  dentro do novo array

    const gameUpdateId = {id, ...changeNameGame} // ... percorre todo o body 
    games.splice(refreshId,1,gameUpdateId) //  o método splice altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
                                          // 1 = é a quantidade de itens que serão removidos após a index que vc passou, se colocou 1 é a própria posição que vc passou no primeiro argumento do método
                                          // gameUpdateId = diz onde vou alterar
    response.status(200).send(games.find(game => game.id === id))
        console.log(games)
}

//patch
const patchNameChange = (request,response) => {
    const gameUp = request.body
    const id = parseInt(request.params.id)
    const gameChange = games.find(game=>game.id == id)

    Object.keys(gameUp).forEach((keys)=>{ // retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto
        gameChange[keys]=gameUp[keys]
    })
}


module.exports = {
    getAllGames,
    putChangeName,
    patchNameChange
}