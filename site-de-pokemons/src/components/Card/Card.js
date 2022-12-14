import { Container } from './styled'
import grass from "../../assets/types/grass.png";
import ball from "../../assets/pokemon-ball-card.png";
import pokemon from "../../assets/bulbasaur.png";
import axios from "axios";
import { useEffect, useState } from 'react';




export const Card = (props) => {
  const { url } = props

  const [image, setImage] = useState("")
  const [pokemon, setPokemon] = useState({})

  const getInfoPokemon = async () => {
    try {
      await axios.get(url)
      .then((response) => {
          // console.log(response.data)
          setPokemon(response.data)
          setImage(response.data.sprites.other.dream_world.front_default)
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getInfoPokemon()
  }, [])

  const sendToPokedex = (card) => {
    
  }


  return (
    <Container>
      <div className='image'>
        {/* <img src={pokemon.sprites.other.dream_world.front_default}/> */}
        <img src={image}/>
      </div>
      <div className='card'>
        <div className='info'>
          <div>
            <h4>#{pokemon.id}</h4>
            <h1>{pokemon.name}</h1>
            <div>
              <img src={grass} />
            </div>
          </div>
          <button>Detalhes</button>
        </div>
        <div className='background'>
          <img src={ball} />
          <button onClick={() => sendToPokedex(pokemon)}>Capturar!</button>
        </div>
      </div>
    </Container>
  )
} 