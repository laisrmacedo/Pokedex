// import {Footer} from "../Footer/Footer"
import styled from "styled-components";
import {goToPokedexPage, goToHomePage} from '../router/coordinator'
import { useNavigate } from 'react-router-dom'
import {Header} from '../components/Header'

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 78vh;
  width: 100vw;
  position: relative;
`
export const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
`
export const DetailsPage = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <Header isAllPokemons={true} isDetailPage={true}/>
      <Main>
        <Container>
          {props.children}
        </Container>
      </Main>
      {/* <Footer/> */}
    </>
  )
}