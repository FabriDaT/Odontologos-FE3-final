import Home from './routes/Home'
import Details from './routes/Details'
import Contact from './routes/Contact'
import Favs from './routes/Favs'
import { useContext } from "react";
import { ThemeContext } from './contexts/ThemeContext'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  const theme = useContext(ThemeContext)

  return (
    <>
    <div className={theme.value + " " + "container"}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path='/dentist/:id' element={<Details />}></Route>
      <Route path='/contacto' element={<Contact />}></Route>
      <Route path='/favs' element={<Favs />}></Route>
      <Route path='*' element={<div>Error 404</div>}></Route>
    </Routes>
    <Footer />
    </div>
    </>
  )
}

export default App
