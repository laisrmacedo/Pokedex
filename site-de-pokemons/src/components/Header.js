import styled from 'styled-components'
import logoPokemon from '../assets/logo-pokemon.png'
import {goToHomePage, goToPokedexPage} from '../router/coordinator'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  height: 160px;
  width: 100vw;
  background-color: #FFFFFF;
  
   div{
     width: 80%;
     height: 100%;
     margin: 0 auto;
     display: flex;
     align-items: center;
     justify-content: space-between;

     div{
       width: 60%;
       height: 100%;
     }

     img{
       margin: 0 auto;
     }

   }
   span{
     width: 20%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
   }
`

export const Header = (props) => {
  const navigate = useNavigate()

  return (
    <Container>
      <div>
        <span>
          {props.isAllPokemons && <button onClick={() => goToHomePage(navigate)}>Todos os Pokemóns</button>}
        </span>
        <img src={logoPokemon}/>
        <span>
          {props.isHomePage && <button onClick={() => goToPokedexPage(navigate)}>POKEDEX</button>}
          {props.isDetailPage && <button>EXCLUIR POKEMÓNS</button>}
        </span>
      </div>
    </Container>
  )
}