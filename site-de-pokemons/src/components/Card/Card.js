import { Container, PokemonTypes, ButtonRed } from './styled'
import grass from "../../assets/types/grass.png";
import ball from "../../assets/small-ball-card.png";
import {useNavigate} from 'react-router-dom'
import {goToDetailsPage} from '../../router/coordinator'
import {getTypes} from '../../utils/returnPokemonType'
import {getColors} from '../../utils/returnCardColor'


export const Card = (props) => {
  const { pokemon, color } = props
  // console.log(color)

  const navigate = useNavigate()
  // console.log(pokemon.types != undefined)
  return (
    <Container color={pokemon.types != undefined && getColors(pokemon.types[0].type.name)}>
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
                // console.log(type.type.name)
                return <img key={type.type.name} src={getTypes(type.type.name)} />
              })}
            </PokemonTypes>
          </div>
          <button onClick={() => goToDetailsPage(navigate, pokemon.id)}>Detalhes</button>
        </div>
        <div className='background'>
          <img src={ball} />
          {props.isHomePage && <button onClick={() => props.sendToPokedex(pokemon)}>Capturar!</button>}
          {props.isPokedexPage && <ButtonRed onClick={() => props.deletePokemon(pokemon.id)}>Excluir</ButtonRed>}
        </div>
      </div>
    </Container>
  )
} 