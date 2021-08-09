var express = require('express');
const pokemon = require('../models/pokemon');
var router = express.Router();

//Get all pokemon
router.get('/', async function(req, res) {
  try{
      const pokemons = await pokemon.find();
      res.json(pokemons);
  }catch(err){
      res.status(500).json({
          message: err.message
      })
  }
});

//Get one pokemon

router.get('/:id', getPokemon, function(req, res){
    //req.params.id
    res.json({ 
        numero: res.pokemonSelecionado.numero,
        nome: res.pokemonSelecionado.nome,
        tipo: res.pokemonSelecionado.tipo
    });
})

//creating one pokemon

router.post('/', async function(req, res){
    const novoPokemon = new pokemon({
        numero: req.body.numero,
        nome: req.body.nome,
        tipo: req.body.tipo
    })

    try{
        const pokemonAdicionado = await novoPokemon.save()
        res.status(201).json(pokemonAdicionado)
    }catch (err){
        res.status(400).json({
            message: err.message
        })
    }
})

//updating one
router.patch('/:id', getPokemon, async function(req, res){
    if(req.body.numero != null){
        res.pokemonSelecionado.numero = req.body.numero;
    }
    if(req.body.nome != null){
        res.pokemonSelecionado.nome = req.body.nome;
    }
    if(req.body.tipo != null){
        res.pokemonSelecionado.tipo = req.body.tipo;
    }

    try{
        const pokemonAtualizado = await res.pokemonSelecionado.save()
        res.json(pokemonAtualizado)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})

//deleting one
router.delete('/:id', getPokemon, async function(req, res){
    try{
        await res.pokemonSelecionado.remove();
        res.status(200).send("Pokemon removido")
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//essa função é tratada como middleware
async function getPokemon(req, res, next){
    let pokemonSelecionado
    try {
        pokemonSelecionado = await pokemon.findOne({nome: req.params.id})
        // pokemonSelecionado = await pokemon.findById(req.params.id);
        if(pokemonSelecionado == null){
            return res.status(404).json({message: "Não foi possível encontrar o Pokemon pesquisado"})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.pokemonSelecionado = pokemonSelecionado;
    next()
}

module.exports = router;