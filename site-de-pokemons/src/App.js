import { useState,useEffect } from 'react';
import { Router } from './router/Router';
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

  function handleCloseModal(){
    setIsOpen(false)
  }

  function handleOpenModal(){
    setIsOpen(true)
    console.log("modal")
  }

  const sendToPokedex = (captured) => {
    const newList = [...listPokedex]
    const listId = newList.map((item) => item.id)
    console.log(listId)
    const pokemonFound = listPokedex.find((element) => {
      return element.id === captured.id
    })

    if(!pokemonFound){
      newList.push(captured)
    }
    setListPokedex(newList)
    handleOpenModal()
  }

  const deletePokemon = (id) => {
    const newList = [...listPokedex]
    const pokemonFound = newList.filter((element) => {
      return element.id != id
    })
    setListPokedex(pokemonFound)
  }

  const context = {
    listPokedex: listPokedex,
    setListPokedex,
    sendToPokedex,
    deletePokemon
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router></Router>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={Modal}
        overlayClassName="Overlay"
      >
        <Modal></Modal>
      </ReactModal>
    </GlobalContext.Provider>
  );
}

export default App;
