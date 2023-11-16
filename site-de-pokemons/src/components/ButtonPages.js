import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;
  color: black;
  scroll-snap-align: start;
  background-color: ${(props) => props.currentPage == props.offset? "#404040" : "rgb(255,255,255, 0.5)"};
  border: none;
  color: ${(props) => props.currentPage == props.offset? "white" : "black"};
  &:hover{
    background-color: rgb(255,255,255, 0.7);
    color: black;
    transition: background-color ease-in 0.2s;
  }
`

export const ButtonPages = (props) => {
  return(
    <Button 
      currentPage={props.currentPage} 
      offset={props.offset}
      onClick={() => props.getPokemonData(props.offset)}
      >
      {props.offset/21 + 1}
    </Button>
  )
}