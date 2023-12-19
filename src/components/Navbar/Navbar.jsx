import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
        
        </ul>
    </div>
  )
}

export default Navbar