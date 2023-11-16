import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from '../components/Header'
import axios from "axios";
import { CardHome } from "../components/Card/CardHome";
import { Footer } from "../components/Footer";
import { ButtonPages } from "../components/ButtonPages";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px -120px);
  width: 100vw;
  position: relative;
  background-color: #5D5D5D;
`
export const Container = styled.div`
  position: relative;
  width: 94%;
  margin: 0 auto;
  max-width: 1275px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  /* border: 2px red solid; */
  
  >h1{
    color: white;
    font-size: 44px;
    margin-bottom: 50px;
    @media screen and (max-width: 425px){
      text-align: center;
      margin-bottom: 20px;
    }
  }
  
  >div{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
    @media screen and (max-width: 425px){
      justify-content: center;
    }
  }

  span{
    height: 100px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* position: relative;
    bottom: 0; */
    .container{
      /* border: 1px red solid; */
      width: 272px;
      margin: 0 auto;
      display: flex;
      gap: 8px;
      div{
        /* border: 1px blue solid; */
        height: 100%;
        width: 176px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        overflow-x: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
      }

      >button{
        padding: 10px;
        overflow: hidden;
        width: 40px;
        height: 40px;
        color: black;
        border-radius: 5px;
        border: none;
      }
    }
  }
`
export const HomePage = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [totalPokemon, setTotalPokemon] = useState(Number)
  const [arrayOffsets, setArrayOffsets] = useState([])

  const currentPage = localStorage.getItem("page") || 0

  useEffect(() => {
    getPokemonData(currentPage)
  }, [])

  useEffect(() => {
    buildArray()
  }, [totalPokemon])

  const getPokemonData = async (n) => {
    localStorage.setItem("page", n)
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${n}&limit=21`)
      setPokemonData(response.data.results)
      setTotalPokemon(response.data.count)
      // console.log(response.data.count)
    } catch (error) {
      console.log(error)
    }
  }  

  const buildArray = () => {
    const length = (totalPokemon - totalPokemon%21)/21
    let array = []
    for (let i = 0; i < length; i++) {
      array.push(i * 21)
    }
    setArrayOffsets(array)
  }

  const moveSlider = (side) => {
    let move = document.querySelector("#slider")
    if(side === "left"){
      move.scrollLeft += -176
    }else{
      move.scrollLeft += +176
    }
    
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
                <CardHome name={item.name}/>
              </div>)
            })
            }
          </div>
          <span>
            <div className="container">
              <button onClick={() => moveSlider("left")}>&lang;</button>
              <div id="slider">
                {arrayOffsets.map((offset) => {
                  return (
                    <ButtonPages 
                    key={offset}
                    offset={offset}
                    getPokemonData={getPokemonData}
                    currentPage={currentPage}
                    />
                    )
                  })}
              </div>
              <button onClick={() => moveSlider("right")}>&rang;</button>
            </div>
          </span>
        </Container>
      </Main>
      <Footer/>
    </>
  )
}