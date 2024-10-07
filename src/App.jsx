import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import RequestPage from './pages/RequestPage'
import AdminPage from './pages/AdminPage'
import { ViewRequestPage } from './pages/ViewRequestPage'
import UpdateRequestPage from './pages/UpdateRequestPage'

function App() {

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/recruitment/main' element={<MainPage/>} />
            <Route path="/recruitment/fillRequest/:id" element={<RequestPage/>}/>
            <Route path="/recruitment/admin/:id" element={<AdminPage/>}/>
            <Route path="/recruitment/viewRequest/:id" element={<ViewRequestPage/>}/>
            <Route path="/recruitment/updateRequest/:id" element={<UpdateRequestPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
