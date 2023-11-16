import {Footer} from "../components/Footer"
import styled from "styled-components";
import {Header} from '../components/Header'
import pikachu from '../assets/pikachu.png'

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px - 120px);
  width: 100vw;
  position: relative;
  background-color: #5D5D5D;
`
export const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img{
    width: 150px;
  }
`
export const ErrorPage = () => {
  return (
    <>
      <Header isAllPokemons={true}/>
      <Main>
        <Container>
          <img src={pikachu}/>
          <h2>PÁGINA NÃO ENCONTRADA</h2>
        </Container>
      </Main>
      <Footer/>
    </>
  )
}