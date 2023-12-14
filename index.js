const app = require('express')();
const filmes = require('./filmes.json')

app.listen(3000, () => console.log('API Funcionando'));

app.get('/', (req, res) => {
    res.send(filmes)
})