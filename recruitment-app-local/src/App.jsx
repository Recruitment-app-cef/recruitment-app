import './App.css'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import FormInscriptions from './Pages/FormInscriptions'
import Admin from './Pages/Admin'
import FormRequest from './Pages/FormRequest'
import { useState } from 'react'

function App() {

  //objeto utilizado para almacenar el valor inicial de la solicitud hecha por el estudiante
  var studentData = {}

  const [studentRequestData, setStudentRequestData] = useState(studentData)

  function onExtractDataToRequest(data){
    //seteando en la variable de estado la data encontrada
    setStudentRequestData(data)
   }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/recruitment" element={<Register/>}/>
          <Route path="/recruitment/inscription" element={<FormInscriptions onExtract={onExtractDataToRequest}/>}/>
          <Route path="/recruitment/admin" element={<Admin/>}/>
          <Route path="/recruitment/inscription/formRequest" element={<FormRequest data={studentRequestData}/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
