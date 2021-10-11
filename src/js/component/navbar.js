import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/Contenido">
				<button className="nav-button">click here</button>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="secnav-button">welcome</button>
				</Link>
			</div>
		</nav>
	);
};
