import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Menu from "./Components/Menu"
import Footer from './Components/Footer';
import Home from './Components/Home';
import AddApps from './Components/AddApp';
import About from './Components/About';

function App() {
  return(
    <>
 <Menu/>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/addApps" element={<AddApps/>}/>
  </Routes>
 <Footer/>
 </>
  ) 
}

export default App;
