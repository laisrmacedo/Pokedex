import styled from "styled-components"

export const Modal = () => {

  const BoxModal = styled.h4`
    background-color: white;
    text-align: center;
    padding: 50px;
    border-radius: 10px;
    width: 400px;

    h1{
      color: black;
    }
    h5{
      color: black;
    }
  `
  
  return(
    <BoxModal>
      <h1>Gotcha!</h1>
      <h5>O Pokémon foi adicionado a sua Pokédex!</h5>
    </BoxModal>
  )
}