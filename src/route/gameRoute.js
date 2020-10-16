const express = require('express')
const router = express.Router()
const controller = require('../controller/gameController')
const cors = require('cors')

/*
@route GET games
@desc Retornar todos os jogos
@acces Public
@endpoint http://localhost:porta/jogos
*/
router.get("/jogos",cors(),controller.getAllGames)

/*
@route PUT games
@desc altera o dado name e company
@acces Public
@endpoint http://localhost:porta/jogos
*/
router.put("/jogos/:id",cors(),controller.putChangeName)

/*
@route PATCH games
@desc altera o dado name e company
@acces Public
@endpoint http://localhost:porta/jogos
*/
router.patch("/jogos/:id",cors(),controller.patchNameChange)


module.exports = router

