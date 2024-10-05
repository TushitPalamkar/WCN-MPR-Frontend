import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App
