// import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <div className="row">
          <div className="col">
            <h5>Shop and Learn</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Store</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Mac</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">iPad</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">iPhone</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Watch</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">AirPods</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">TV & Home</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">AirTag</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Accessories</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Gift Cards</Link></li>
            </ul>
          </div>
          <div className="col">
            <h5>Account</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Manage Your Apple ID</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Store Account</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">iCloud.com</Link></li>
            </ul>
          </div>
          <div className="col">
            <h5>Entertainment</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple One</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple TV+</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Music</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Arcade</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Podcasts</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Books</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">App Store</Link></li>
            </ul>
          </div>
          <div className="col">
            <h5>Apple Store</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Find a Store</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Genius Bar</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Today at Apple</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Group Reservations</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Camp</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Apple Trade In</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Ways to Buy</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Recycling Programme</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Order Status</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Shopping Help</Link></li>
            </ul>
          </div>
          {/* Add more columns as needed */}
        </div>
        <div className="text-center">
          <p className="text-body-secondary">More ways to shop: <Link to="/" className="text-body-secondary">Find an Apple Store</Link> or <Link to="/" className="text-body-secondary">other retailer</Link> near you. Or call 000800 040 1966</p>
          <p className="text-body-secondary">Copyright © 2024 ABC Automobiles. All rights reserved.</p>
          <p className="text-body-secondary">
            <Link to="/" className="text-body-secondary">Privacy Policy</Link> | <Link to="/" className="text-body-secondary">Terms of Use</Link> | <Link to="/" className="text-body-secondary">Sales Policy</Link> | <Link to="/" className="text-body-secondary">Legal</Link> | <Link to="/" className="text-body-secondary">Site Map</Link>
          </p>
          <p className="text-body-secondary">India | ENG</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;