// import './App.css'
import Home from './pages/home'
import Cars from './pages/cars'
import Upload from './pages/upload'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path='/upload'element={<Upload />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
