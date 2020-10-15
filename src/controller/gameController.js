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

    const refreshId = gameRefresh.indexOf(id) // descobrir o index  de cada elemento do array

    const gameUpdateId = {id, ...changeNameGame} // ... percorre todo o body 
    games.splice(refreshId,1,gameUpdateId) //  o método splice altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
                                          // 1 = um elemento que pretendo mudar 
                                          // gameUpdateId = diz onde vou alterar
    response.status(200).send(games.find(game => game.id === id))
        console.log(games)
}

//patch



module.exports = {
    getAllGames,
    putChangeName
}