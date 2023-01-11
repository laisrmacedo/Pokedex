import { Container, PokemonTypes, ButtonRed } from './styled'
import ball from "../../assets/small-ball-card.png";
import {useNavigate} from 'react-router-dom'
import {goToDetailsPage} from '../../router/coordinator'
import {getTypes} from '../../utils/returnPokemonType'
import {getColors} from '../../utils/returnCardColor'
import { GlobalContext } from '../../context/GlobalContext';
import {useContext} from 'react'

export const Card = (props) => {
  const navigate = useNavigate()
  const { pokemon} = props
  const context = useContext(GlobalContext)
  const {getInfoPokemon} = context

  return (
    <Container color={pokemon.types != undefined && getColors(pokemon.types[0].type.name)} pokemonFound={props.pokemonFound}>
      <div className='image'>
        <img src={pokemon.sprites?.other.dream_world.front_default}/>
      </div>
      <div className='card'>
        <div className='info'>
          <div>
            <h4>#{pokemon.id}</h4>
            <h1>{pokemon.name}</h1>
            <PokemonTypes>
              {pokemon.types?.map((type) => {
                return <img key={type.type.name} src={getTypes(type.type.name)} />
              })}
            </PokemonTypes>
          </div>
          <button onClick={() => getInfoPokemon(pokemon.name) && goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
        </div>
        <img src={ball} />
        <div className='background'>
          {props.isHomePage && 
            <button 
              disabled={props.pokemonFound != undefined? true : false} 
              onClick={() => props.sendToPokedex(pokemon.name)}>
              {props.pokemonFound != undefined? "Capturado ✔" : "Capturar!"}
            </button>}
          {props.isPokedexPage && <ButtonRed onClick={() => props.deletePokemon(pokemon.name)}>Excluir</ButtonRed>}
        </div>
      </div>
    </Container>
  )
} 