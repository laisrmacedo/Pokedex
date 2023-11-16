import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px - 120px);
  width: 100vw;
  position: relative;
  background-color: #5D5D5D;
`
export const Container = styled.div`
  width: 94%;
  max-width: 1275px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  /* border: 2px red solid; */
  
  >h1{
    color: white;
    font-size: 44px;
    overflow-y: hidden;
    @media screen and (max-width: 425px){
      margin-bottom: 40px;
      text-align: center;
    }
  }
  
  >div{
    min-height: 580px;
    display: flex;
    align-items: flex-end;
    position: relative;
    /* border: 2px blue solid; */
    @media screen and (max-width: 425px){
      margin: 0 auto;
      min-height: 1300px;
      width: 96%;
    }
    >span{
      position: absolute;
      z-index: 2;
      top: 0;
      right: 40px;
      width: 240px;
      @media screen and (max-width: 425px){
        right: 0;
        height: 200px;
      }
      >img{
        height: 100%;
      }
    }
    
  }
`
export const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 86%;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  position: relative;
  padding: 20px;
  /* border: 2px blue solid; */

  @media screen and (max-width: 425px){
    flex-direction: column-reverse;
    height: 90%;
    
  }
  
  >img{
    position: absolute;
    height: 95%;
    z-index: 0;
    right: 0;
    @media screen and (max-width: 425px){
      height:25%;
      top: 0
    }
  }

  .ball{
    position: absolute;
    height: 95%;
    z-index: 0;
    right: 0;
  }


`
export const Left = styled.div`
  width: 50%;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 425px){
    width: 100%;
    flex-direction: column-reverse;
  }
  
  .images{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 425px){
      width: 100%;
    }
    div{
      /* border: 2px red solid; */
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 10px;
      height: 50%;
      img{
        width: 160px;
      }
    }
  }
  
  .base{
    background-color: white;
    width: 50%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3{
      color: black;
    }
    @media screen and (max-width: 425px){
      width: 100%;
    }
  }
  `
export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 425px){
    /* border: 2px red solid; */
    width: 100%;
    gap: 20px;
  }

  .pokemonData{
    h1{
      font-size: 44px;
      @media screen and (max-width: 425px){
        font-size: 32px;
      }
    }
    h2{
      font-size: 20px;
      font-weight: 800;
    }
    div{
      display: flex;
      gap: 12px;
      img{
        height: 31px;
      }
    }
    @media screen and (max-width: 425px){
      height: 150px;
    }
  }
  
  .moves{
    /* border: 2px black solid; */
    display: flex;
    padding: 20px;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: center;
    align-items: center; */
    background-color: white;
    border-radius: 10px;
    height: 65%;
    width: 50%;
    gap: 20px;

    @media screen and (max-width: 425px){
      width: 100%;
    }
    
    /* position: relative; */

    
    h3{
      color: black;
    }

    span{
      color: black;
      font-size: 12px;
      font-weight: 100;
      border: 1px dashed #C2C2C2;
      padding: 4px;
      background-color: #ECECEC;
      border-radius: 10px;
    }
  }
`
export const PokemonTypes = styled.div`

`
export const Stat = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 10px;
  >div{
    display: flex;
    flex-direction: column;
    gap: 7px;

    &:first-child{
    align-items: flex-end;
    }
    &:last-child{
      /* display: flex; */
      gap: 10px;
      /* border: 1px red solid; */
    
    }
  }
  
  p{
    color: gray;
    font-size: 10px;
    font-weight: 100;

  }
`
