import styled from "styled-components";

export const Container = styled.div`
width: 410px;
height: 260px;
display: flex;
align-items: flex-end;
position: relative;
/* border: 1px blue solid; */

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
  
  img{
    object-fit: contain;
    width: 90%;
    height: 90%;
      /* border: 2px solid red; */
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
  }
  
  .info{
    padding: 25px 0 23px 25px;
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  /* border: red 1px solid; */

    >div{
      display: flex;
      flex-direction: column;
    }

    h1,h4{
      font-family: 'Inter', sans-serif;
    }

    button{
      display: flex;
      background-color: transparent;
      border: none;
      width: 74px;
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
    position: relative;
    /* border: 2px blue solid; */

    img{
      position: absolute;
      z-index: 0;
      right: 0;
      object-fit: cover;
      height: 100%;
    }
    button{
      /* border: 2px red solid; */
      width: 146px;
      height: 38px;
      color: black;
      border-radius: 8px;
      position: absolute;
      z-index: 1;
      bottom: 23px;
      right: 26px;
      cursor: pointer;
      border: none;
      font-weight: 100;
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