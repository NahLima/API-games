const app = require('./src/app')
const PORT = 3001

app.listen(PORT,()=>{
    console.log(`servidor rodando na porta ${PORT}`)
})

// app.listen(PORT, function(){
//     console.log(`servidor rodando na porta ${PORT}`)
// }) 