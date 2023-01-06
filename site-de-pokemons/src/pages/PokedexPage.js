// import {Footer} from "../Footer/Footer"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Card } from '../components/Card/Card'



const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 78vh;
  width: 100vw;
  position: relative;
  background-color: #5D5D5D;
`

export const Container = styled.div`
  position: relative;
  width: 94%;
  margin: 0 auto;
  max-width: 1440px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  /* border: 2px red solid; */
  
  >h1{
    color: white;
    font-size: 44px;
    margin-bottom: 50px;
  }
  
  >div{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
  }

`
export const PokedexPage = (props) => {

  // const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const { listPokedex, deletePokemon } = context

  // const deletePokemon = (captured) => {
  //   const newList = [...listPokedex]
  //   const pokemonFound = newList.filter((element) => {
  //     return element.id !== captured.id
  //   })
  //   setListPokedex(pokemonFound)
  // }


  return (
    <>
      <Header isAllPokemons={true} />
      <Main>
      <Container>
          <h1>Meus Pokémons</h1>
          <div>
            {listPokedex.map((item) => {
              return (<div key={item.name}>
                <Card
                  pokemon={item}
                  deletePokemon={deletePokemon}
                  isPokedexPage={true}
                />
              </div>)
            })}
        </div>
        </Container>
      </Main>
      {/* <Footer/> */}
    </>
  )
}