import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App
