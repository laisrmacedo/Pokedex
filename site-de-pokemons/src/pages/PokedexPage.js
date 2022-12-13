// import {Footer} from "../Footer/Footer"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import {Header} from '../components/Header'


const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 78vh;
  width: 100vw;
  position: relative;
  background-color: #5D5D5D;
`
const Background = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
`
export const PokedexPage = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <Header isAllPokemons={true}/>
      <Main>

      </Main>
      {/* <Footer/> */}
    </>
  )
}