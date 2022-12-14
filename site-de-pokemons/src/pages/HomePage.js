import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card/Card";
import { Header } from '../components/Header'
import axios from "axios";


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
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;

  >h1{
    color: white;
    font-size: 44px;
    margin-bottom: 50px;
  }
  
  >div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

`
export const HomePage = () => {
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    getPokemonData()

  }, [])

  const getPokemonData = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        setPokemonData(response.data.results)
      })
      .catch((error) => console.log(error))
  }  

  return (
    <>
      <Header isHomePage={true} />
      <Main>
        <Container>
          <h1>Todos Pokémons</h1>
          <div>
            {pokemonData && pokemonData.map((item) => {
              return (<div key={item.name}>
                <Card url={item.url}/>
              </div>)
            })
            }
          </div>
        </Container>
      </Main>
      {/* <Footer/> */}
    </>
  )
}