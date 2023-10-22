import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar shadow justify-content-around">
			<img src="../static/logo.png" alt="logo"/>
			<nav className="navbar justify-content-end column-gap-3">
				<NavLink className="nav-link" to="/">Home</NavLink> |
				<NavLink className="nav-link" to="contact/add">Add more</NavLink>
			</nav >
		</nav >
	)
}