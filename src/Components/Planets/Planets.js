import './planets.css';
import { useEffect, useState } from 'react';
import Planet from '../Planet/Planet';
import { Route, NavLink, useParams } from 'react-router-dom';
export default function Planets(props) {
	const [list, setList] = useState([]); // all hooks return two things - a variable and a function
	// useState - for creating and updating variables inside state
	// useEffect - for the rendering lifecycle
	// function addPlanet() {
	// 	setList([...list, 'Eduard']);
	// }

	async function fetchData() {
		let url = 'https://swapi.dev/api/planets';
		let resp = await fetch(url);
		let data = await resp.json();
		setList(data.results); // new array being put into 'list'
	}

	function findPlanet(id) {
		console.log(`found plane`);
		return list.find((item, index) => id == index + 1);
		// returns an object for the single planet
	}

	useEffect(() => {
		//all useEffect run on the initial render of the component
		fetchData();
	}, []); // useEffect listens to a variable change and runs the code when that happens
	return (
		<div className="planets">
			<div className="planet-list">
				{list.length === 0 && <p>There are no planets yet</p>}
				{list.map((item, index) => (
					<p key={item.name}>
						<NavLink to={`/planets/${index + 1}`}>{item.name}</NavLink>
						<span>{item.terrain}</span>
					</p>
				))}
			</div>
			<div className="planet-details">
				<Route path="/planets/:id">
					<Planet findPlanet={findPlanet} />
				</Route>
			</div>
		</div>
	);
}

// && logical short circuiting
