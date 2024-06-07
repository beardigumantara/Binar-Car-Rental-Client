// import './App.css'
import Home from './pages/home'
import Cars from './pages/cars'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
