import { Container } from './styled'
import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import {Card} from './Card'

export const CardHome = (props) => {
  const { name } = props

  const [pokemon, setPokemon] = useState({})

  const getInfoPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setPokemon(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getInfoPokemon()
  }, [])

  const context = useContext(GlobalContext)
  const {listPokedex, sendToPokedex} = context

  const pokemonFound = listPokedex.find((element) => {
    return element.name === pokemon.name
  })

  return (
    <Container>
      {listPokedex && <Card 
        pokemon={pokemon}
        pokemonFound={pokemonFound}
        sendToPokedex={sendToPokedex} 
        isHomePage={true}
      />}
    </Container>
  )
} 