import './home.css';
import PropTypes from 'prop-types';
//used to be part of react ... not it's its own module
export default function Home(props) {
	return (
		<div className="Home">
			<p>This is home page</p>
		</div>
	);
}

// add PropTypes

Home.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	isAlive: PropTypes.bool.isRequired,
	anything: PropTypes.any.isRequired,
	myObj: PropTypes.shape({
		email: PropTypes.string,
		age: PropTypes.number,
	}),
	greet: PropTypes.oneOf(['hello', 'goodbye']),
	something: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
