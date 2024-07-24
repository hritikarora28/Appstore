// import './Footer.css'
import { Link } from "react-router-dom";
function Footer(){
    return (
      <>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3" data-testid="footer-content">
      <li className="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/about" class="nav-link px-2 text-body-secondary">About</Link></li>
      <li className="nav-item"><Link to="/vehicleList" class="nav-link px-2 text-body-secondary">Vehicles</Link></li>
      <li className="nav-item"><Link to="/services" class="nav-link px-2 text-body-secondary">Servcies</Link></li>
      <li className="nav-item"><Link to="/add-vehicle" class="nav-link px-2 text-body-secondary">Add Vehicle</Link></li>
      <li className="nav-item"><Link to="/contact" class="nav-link px-2 text-body-secondary">Contact US</Link></li>
    </ul>
    <div data-testid="footer-content">
    <p className="text-center text-body-secondary">© 2024 ABC Automobiles</p>
    </div>
  </footer>
</div>
      </>
 
    )
  }


export default Footer;
