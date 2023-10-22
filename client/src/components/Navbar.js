import { NavLink } from "react-router-dom";
import logo from '../static/logo.png'
import NavbarCSS from './Navbar.module.css'
export default function Navbar() {
	return (
		<nav className={["navbar shadow justify-content-between px-4", NavbarCSS.navbar].join(" ")} >
			<NavLink to="/"> <img src={logo} alt="logo" height='40px' /></NavLink>
			<nav className="navbar justify-content-end column-gap-3">
				<NavLink className={["nav-link", NavbarCSS.buttons].join(" ")} to="/">Home</NavLink> |
				<NavLink className={["nav-link", NavbarCSS.buttons].join(" ")} to="contact/add">Add more</NavLink>
			</nav >
		</nav >
	)
}