import logo from './logo.svg';
import ErrorBoundary from "./Components/ErrorBoundary";
import './App.css';
import {Route, Routes} from "react-router-dom"
import Menu from "./Components/Menu"
import Footer from './Components/Footer';
import Home from './Components/Home';
import AddApps from './Components/AddApp';
import About from './Components/About';
import Update from './Components/Update';



function App() {
  return(
    <>
       <ErrorBoundary>
 <Menu/>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/addApps" element={<AddApps/>}/>
 <Route path="/update/:id" element={<Update/>}/>
  </Routes>
 <Footer/>
 </ErrorBoundary>
 </>
  ) 
}

export default App;
