import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../Pages/Home'
import RegisterPage from '../Pages/Register'
import ResetPage from '../Pages/Reset'


function App() {
 

  return (
    //routes and route is imported and exact path and path is assigned
   <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/reset/:string" element={<ResetPage/>}/>
   </Routes>
  )
}

export default App