import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';
import Cart from './components/Cart';
import Payment from './components/Payment';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </Router>
  );
}

export default App
