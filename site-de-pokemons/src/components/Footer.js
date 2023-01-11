import styled from "styled-components";
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Container = styled.div`
  height: 120px;
  width: 100vw;
  background-color: #5D5D5D;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 12px;
  
  div{
    height: 80px;
    max-width: 1275px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    @media screen and (max-width: 425px){
      flex-direction: column;
      gap: 4px;
      .barra{
        display: none;
      }
    }
    
  }
  p{
    font-weight: 100;
    font-size: 12px;
    text-transform: uppercase;
    color: #C4C4C4;
    @media screen and (max-width: 425px){
      font-size: 10px;
    }
    
  }
  /* border: 1px red solid; */
  span{
    display: flex;
    align-items: center;
    gap: 5px;
    a{
      display: flex;
      align-items: center;
    }
    @media screen and (max-width: 425px){
      width: 120px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  img{
    width: 20px;
    filter: invert();
    &:hover{
      filter: none;
    }
    &:active{
      filter: brightness(1.5);
    }
  }
  `

export const Footer = () => { 

  return(
    <Container>
      <div>
        <p>Designed by LABENU</p>
        <p className="barra">|</p>
        <span>
          <p>Built by Laís Macedo</p>
          <a href="https://www.linkedin.com/in/laisrmacedo/" target="_blank">
              <img src={linkedin} alt=""/>
          </a>
          <a href="https://github.com/laisrmacedo" target="_blank">
              <img src={github} alt=""/>
          </a>
        </span>
      </div>
    </Container>
  )
}