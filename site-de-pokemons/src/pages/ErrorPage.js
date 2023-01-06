// import {Footer} from "../Footer/Footer"
import styled from "styled-components";
import {goToPokedexPage, goToHomePage} from '../router/coordinator'
import { useNavigate } from 'react-router-dom'
import {Header} from '../components/Header'

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
`
export const ErrorPage = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <Header isAllPokemons={true}/>
      <Main>
        <Container>
          <h1>ERROR PAGE</h1>
        </Container>
      </Main>
      {/* <Footer/> */}
    </>
  )
}