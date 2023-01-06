import styled from 'styled-components'
import logoPokemon from '../assets/logo-pokemon.png'
import {goToHomePage, goToPokedexPage} from '../router/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext';
import {useContext, useState, useEffect} from 'react'


const Container = styled.div`
  height: 160px;
  width: 100vw;
  background-color: #FFFFFF;
  
   div{
     width: 94%;
     max-width: 1440px;
     height: 100%;
     margin: 0 auto;
     display: flex;
     align-items: center;
     justify-content: space-between;
    }

   span{
     width: 20%;
     height: 100%;
     display: flex;
     align-items: center;
     /* justify-content: center; */
   }
`
const ButtonGreen = styled.button`
  padding: 19px 40px;
  background-color: white;
  border: #E6E6E6 solid 2px;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  color: black;
  cursor: pointer;
`
const ButtonBlue = styled.button`
  padding: 19px 90.5px;
  background-color: #33A4F5;
  border: none;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`
const ButtonBlack = styled.button`
  background-color: white;
  border: none;
  color: black;
  text-decoration: underline;
  font-size: 18px;
  cursor: pointer;
`
const ButtonRed = styled.button`
  padding: 19px 40px;
  width: 100%;
  background-color: #FF6262;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 100;
  cursor: pointer;
`


export const Header = (props) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const context = useContext(GlobalContext)
  const {listPokedex, sendToPokedex, deletePokemon} = context

  const [button, setButton] = useState("")

  const updateButton = (id) => {
    const newList = [...listPokedex]
    const pokemonFound = newList.filter((element) => element.id == id)
    
    if(pokemonFound.length === 0){
      return setButton(<ButtonGreen onClick={() => sendToPokedex(id)}>Capturar!</ButtonGreen>) 
    }else{
      return setButton(<ButtonRed onClick={() => deletePokemon(id)}>Excluir da Pokédex</ButtonRed>) 
    }
  }
  
  useEffect(() => {
    updateButton(id)
  }, [listPokedex])

  return (
    <Container>
      <div>
        <span>
          {props.isAllPokemons && <ButtonBlack onClick={() => goToHomePage(navigate)}>&lt; Todos os Pokemóns</ButtonBlack>}
        </span>
        <img src={logoPokemon}/>
        <span>
          {props.isHomePage && <ButtonBlue onClick={() => goToPokedexPage(navigate)}>Pokédex</ButtonBlue>}
          {props.isDetailPage && button}
        </span>
      </div>
    </Container>
  )
}