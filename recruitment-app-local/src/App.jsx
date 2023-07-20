import './App.css'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import FormInscriptions from './Pages/FormInscriptions'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/recruitment" element={<Register/>}/>
          <Route path="/recruitment/inscription" element={<FormInscriptions/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
