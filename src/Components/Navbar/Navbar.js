import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<div className="Navbar">
			<NavLink activeClassName="active" to="/" exact>
				Home
			</NavLink>
			<NavLink activeClassName="active" to="/people">
				People
			</NavLink>
			<NavLink activeClassName="active" to="/planets">
				Planets
			</NavLink>
			<NavLink activeClassName="active" to="/iojnklm">
				Nowhere
			</NavLink>
		</div>
	);
}
