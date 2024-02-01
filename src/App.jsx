import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainRoute from './auth/routes/MainRoute'
import Home from './auth/pages/home/Home'
import Menu from './auth/pages/menu/Menu'
import About from './auth/pages/about/About'
import Contact from './auth/pages/contact/Contact'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRoute/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
