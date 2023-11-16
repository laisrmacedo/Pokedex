import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage'
import { PokedexPage } from '../pages/PokedexPage'
import { DetailsPage } from '../pages/DetailsPage/DetailsPage'
import { ErrorPage } from '../pages/ErrorPage'

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path={`/pokedex`} element={<PokedexPage/>}/>
        <Route path={`/details/:name`} element={<DetailsPage/>}/>
        <Route path={`*`} element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}