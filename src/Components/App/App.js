import './app.css';
import Navbar from '../Navbar/Navbar';
//next 4 go inside <main>
import Home from '../Home/Home';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Not from '../Not/Not';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Switch>
					<Route path="/planets">
						<Planets />
					</Route>
					<Route path="/people">
						<People />
					</Route>
					<Route path="/404">
						<Not />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<Redirect to="/404" />
				</Switch>
			</main>
		</div>
	);
}
