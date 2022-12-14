import styled from "styled-components";

export const Container = styled.div`
width: 440px;
height: 260px;
display: flex;
align-items: flex-end;
position: relative;
.image{
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;
  /* border: 1px red solid; */
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
  background-color: #729F92;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: white;
  border-radius: 14px;

  
  }
  
  .info{
    padding: 25px 0 23px 25px;
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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


    img{
      position: absolute;
      z-index: 0;
      right: 0;
      object-fit: cover;
      height: 100%;
    }
    button{
      width: 146px;
      height: 38px;
      color: black;
      border-radius: 8px;
      border: none;
      font-weight: 100;
      margin-bottom: 23px;
      margin-right: 26px;
    }
  }
`