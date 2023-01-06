import styled from "styled-components"

export const Modal = (props) => {

  const BoxModal = styled.h4`
    background-color: white;
    text-align: center;
    padding: 50px;
    border-radius: 10px;
    width: 400px;

    h1{
      font-size: 32px;
      color: black;
    }
    h5{
      font-size: 14px;
      color: black;
    }
  `
  
  return(
    <BoxModal>
      {props.optionModal === 1? 
      <>
        <h1>Gotcha!</h1>
        <h5>O Pokémon foi adicionado a sua Pokédex</h5>
      </>
        : 
      <>
        <h1>Oh, no!</h1>
        <h5>O Pokémon foi removido da sua Pokédex</h5>
      </>
      }
    </BoxModal>
  )
}