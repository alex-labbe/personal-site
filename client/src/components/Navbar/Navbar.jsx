import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/poemify">Poemify</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;