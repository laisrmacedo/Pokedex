import styled from "styled-components";

export const Container = styled.div`
width: 410px;
height: 260px;
display: flex;
align-items: flex-end;
position: relative;

@media screen and (max-width: 425px){
  width: 280px;
  height: 300px;
}

.image{
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px){
    width: 150px;
    height: 150px;
    /* border: 2px solid red; */
    top: 0px;
    right: 0;
  }
  
  img{
    object-fit: contain;
    width: 90%;
    height: 90%;
  }

}

.card{
  width: 100%;
  position: relative;
  height: 210px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  border-radius: 14px;
  /* border: 2px solid red; */ 
    @media screen and (max-width: 425px){
      flex-direction: column;
      height: 230px;
    }

    >img{
      position: absolute;
      z-index: 0;
      right: 0;
      object-fit: cover;
      height: 100%;

      @media screen and (max-width: 425px){
        height: 90%;
        top: 0;
      }
  }

  
  .info{
    padding: 25px 0 23px 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: flex-start; */
    /* border: blue 1px solid; */
    
    @media screen and (max-width: 425px){
      padding-top: 40px;
      width: 100%;
      position: relative;
      z-index: 1;
      height: 100%;
      align-items: flex-start;

      h1{
        font-size: 28px;
      }

    }

    >div{
      display: flex;
      flex-direction: column;
      /* border: magenta 1px solid; */
      @media screen and (max-width: 425px){
        gap: 5px;
      }
    }

    h1,h4{
      font-family: 'Inter', sans-serif;
    }


    >button{
      display: flex;
      align-items: flex-end;
      background-color: transparent;
      position: relative;
      left: 0;
      bottom: 0;
      border: none;
      font-weight: bold;
      /* width: 74px; */
      color: white;
      font-size: 14px;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .background{
    width: 52%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    /* position: relative; */
    position: absolute;
    right: 0;
    z-index: 1;
    /* border: 2px blue solid; */
    @media screen and (max-width: 425px){
      width: 65%;
      justify-content: center;
    }


    /* img{
      position: absolute;
      z-index: 0;
      right: 0;
      object-fit: cover;
      height: 100%;

      @media screen and (max-width: 425px){
        height: 70%;
        top: 0;
      } */
    }

    button{
      border: 2px red solid;
      width: 146px;
      height: 38px;
      color: ${(props) => props.pokemonFound != undefined? "green" : "black"};
      background-color: ${(props) => props.pokemonFound != undefined? "transparent" : "white"};;
      border-radius: 8px;
      position: absolute;
      z-index: 2;
      bottom: 23px;
      right: 26px;
      cursor: pointer;
      border: ${(props) => props.pokemonFound != undefined? "green 1px solid" : "none"};;
      font-weight: 100;

      @media screen and (max-width: 425px){
        width: 120px;
      }
    }
  }
`

export const PokemonTypes = styled.div`
  display: flex;
  gap: 7px;
  img{
    height: 28px;
  }
`

export const ButtonRed = styled.div`
  color: white;
  width: 146px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  color: white;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  bottom: 23px;
  right: 26px;
  cursor: pointer;
  background-color: #FF6262;
  font-size: 14px;
  font-weight: 100;
`