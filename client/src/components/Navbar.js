import { NavLink } from "react-router-dom";
import logo from '../static/logo.png'
export default function Navbar() {
	return (
		<nav className="navbar shadow justify-content-around">
			<NavLink to="/"> <img src={logo} alt="logo" height='40px' /></NavLink>
			<nav className="navbar justify-content-end column-gap-3">
				<NavLink className="nav-link" to="/">Home</NavLink> |
				<NavLink className="nav-link" to="contact/add">Add more</NavLink>
			</nav >
		</nav >
	)
}