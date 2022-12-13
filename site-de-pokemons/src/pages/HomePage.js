import styled from "styled-components";
import { Card } from "../components/Card/Card";
import {Header} from '../components/Header'

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 78vh;
  width: 100vw;
  position: relative;
  background-color: #5D5D5D;
`
export const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 70px;
  
  >h1{
    color: white;
    font-size: 44px;
    margin-bottom: 50px;
  }

`
export const HomePage = () => {

  const pokemon = async() => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <>
      <Header isHomePage={true}/>
      <Main>
        <Container>
          <h1>Todos Pokémons</h1>
          <Card/>
        </Container>
      </Main>
      {/* <Footer/> */}
    </>
  )
}