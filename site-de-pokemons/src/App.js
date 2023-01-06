import { useState,useEffect } from 'react';
import { Router } from './router/Router';
import axios from "axios";
import {GlobalContext} from './context/GlobalContext'
import { Modal } from './components/Modal';
import ReactModal from 'react-modal';
import './app.css'

ReactModal.setAppElement('#root')

function App() {
  const capturedPokemon = JSON.parse( localStorage.getItem("captured") || "[]")
  const [listPokedex, setListPokedex] = useState([...capturedPokemon])

  useEffect(()=>{
    localStorage.setItem("captured", JSON.stringify(listPokedex))
  },[listPokedex])

  const [modalIsOpen, setIsOpen] = useState(false)
  const [optionModal, setOptionModal] = useState(Number)
  // const [pokemon, setPokemon] = useState({})

  function handleCloseModal(){
    setIsOpen(false)
  }

  function handleOpenModal(){
    setIsOpen(true)
  }

  const getInfoPokemon = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }


  const sendToPokedex = async (name) => {
    const newList = [...listPokedex]
    const pokemonFound = listPokedex.find((element) => {
      return element.name === name
    })
    
    if(!pokemonFound){
      setOptionModal(1)
      try {
        const clickedPokemon = await getInfoPokemon(name)
        newList.push(clickedPokemon)
        setListPokedex(newList)
      } catch (error) {
        console.log(error.message)
      }
    }
    handleOpenModal()
  }

  const deletePokemon = (name) => {
    const newList = [...listPokedex]
    const pokemonFound = newList.filter((element) => {
      return element.name != name
    })
    setListPokedex(pokemonFound)
    setOptionModal(2)
    handleOpenModal()
  }

  const context = {
    listPokedex: listPokedex,
    // pokemon:pokemon,
    setListPokedex,
    sendToPokedex,
    deletePokemon,
    getInfoPokemon
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router></Router>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Modal optionModal={optionModal}/>
      </ReactModal>
    </GlobalContext.Provider>
  );
}

export default App;
