import { Container } from './styled'
import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import {Card} from './Card'
import {getColors} from '../../utils/returnCardColor'

export const CardHome = (props) => {
  const { url } = props

  const [pokemon, setPokemon] = useState({})

  const getInfoPokemon = async () => {
    try {
      await axios.get(url)
      .then((response) => {
        // console.log(response.data)
        setPokemon(response.data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getInfoPokemon()
  }, [])

  const context = useContext(GlobalContext)

  const {listPokedex, sendToPokedex} = context

  // const sendToPokedex = (captured) => {
  //   const newList = [...listPokedex]
  //   const pokemonFound = listPokedex.find((element) => {
  //     return element.id === captured.id
  //   })

  //   if(!pokemonFound){
  //     newList.push(captured)
  //   }
  //   console.log("capturar")
  //   setListPokedex(newList)
  // }


  return (
    <Container>
      {listPokedex && <Card 
        pokemon={pokemon} 
        sendToPokedex={sendToPokedex} 
        isHomePage={true}
      />}
    </Container>
  )
} 