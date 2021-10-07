import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<button className="nav-button">click here</button>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="secnav-button">welcome</button>
				</Link>
			</div>
		</nav>
	);
};
