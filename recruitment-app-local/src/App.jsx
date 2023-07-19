import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import One from './Pages/One'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/recruitment" element={<Register/>}/>
          <Route path="/recruitment/grant" element={<One/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
