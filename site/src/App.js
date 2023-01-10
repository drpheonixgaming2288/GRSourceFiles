import { Route, Routes } from 'react-router';
import './App.css';
import Artists from './Components/Artists/Artists';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/artists' element={<Artists/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
