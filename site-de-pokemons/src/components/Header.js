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
     max-width: 1275px;
     height: 100%;
     margin: 0 auto;
     display: flex;
     align-items: center;
     justify-content: space-between;
     >span{
       width: 20%;
       height: 100%;
       display: flex;
       align-items: center;
     }
    }

    @media screen and (max-width: 425px){
    img{
      width: 45%;
    }
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
  background-color: #33A4F5;
  border: none;
  width: 100%;
  height: 40%;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`
const ButtonBlack = styled.button`
  background-color: white;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  p{
    text-decoration: underline;
    color: black;
  }
  @media screen and (max-width: 1024px){
  font-size: 44px;
    p{
      display: none;
    }
  }
`
const ButtonRed = styled.button`
  width: 100%;
  height: 40%;
  background-color: #FF6262;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 100;
  cursor: pointer;
  span{
    display: none;
  }

  @media screen and (max-width: 1024px){
    height: 30%;

    span{
      font-size: 24px;
      display: flex;
      justify-content: center;
    }
    p{
      display: none;
    }
  }
  @media screen and (max-width: 425px){
    height: 25%;
    width: 80%;
    span{
      font-size: 18px;
      /* display: none; */
    }
  }
`


export const Header = (props) => {
  const navigate = useNavigate()
  const { name } = useParams();
  const context = useContext(GlobalContext)
  const {listPokedex, sendToPokedex, deletePokemon} = context

  const [button, setButton] = useState("")

  const updateButton = (name) => {
    const newList = [...listPokedex]
    const pokemonFound = newList.filter((element) => element.name == name)
    
    if(pokemonFound.length === 0){
      return setButton(<ButtonGreen onClick={() => sendToPokedex(name)}>Capturar!</ButtonGreen>) 
    }else{
      return setButton(<ButtonRed onClick={() => deletePokemon(name)}><span>X</span><p>Excluir da Pokédex</p></ButtonRed>) 
    }
  }
  
  useEffect(() => {
    updateButton(name)
  }, [listPokedex])

  return (
    <Container screen={true}>
      <div>
        <span>
          {props.isAllPokemons && <ButtonBlack onClick={() => goToHomePage(navigate)}>&lt; <p>Todos os Pokemóns</p></ButtonBlack>}
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