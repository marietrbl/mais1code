const express = require('express');
const {musicas, artista, duracao, album} = require('./dados');

const app = express()

app.get('/', (req, res) => {
  console.log('opa, bateu aqui')
  return res.json({msg: 'irra'})
})

app.get('/musicas', (req, res) => {
  console.log('rota músicas')
  return res.json({musicas: musicas})
})

app.get('/artista', (req, res) => {
  console.log('rota artista')
  return res.json({artista: artista})
})

app.get('/duracao', (req, res) => {
  console.log('rota duração')
  return res.json({duracao: duracao})
})

app.get('/album', (req, res) => {
  console.log('rota álbum')
  return res.json({album: album})
})

app.get('/musicas/artista/duracao/album/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log('rota /musicas/artista/duracao/album com id: ', id)
  console.log(musicas.find(ing => ing.id === id))
  return res.json({musicas:musicas.find(ing => ing.id === id)})
})


app.listen(3000, () => console.log('💻 Servidor executando na porta 3000 💻'))