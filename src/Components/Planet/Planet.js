import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './planet.css';

export default function Planet(props) {
	const [planet, setPlanet] = useState({});

	let { id } = useParams();

	useEffect(() => {
		setPlanet(props.findPlanet(id));
		console.log(planet);
	}, [id]);
	return (
		<>
			<p>{id}</p>
			<p>this is the planet details page</p>
			<p>{planet.name}</p>
		</>
	);
}
