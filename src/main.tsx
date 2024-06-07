import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Protected from './components/protected.tsx'
import Home from './pages/home.tsx'
import Upload from './pages/upload.tsx'
import Cars from './pages/cars.tsx'
import Register from './pages/register.tsx'
import Login from './pages/login.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={
            <Protected>
              <App/>
            </Protected>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Cars/>}/>
            <Route path='/upload' element={<Upload/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
