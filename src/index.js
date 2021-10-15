import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter hashType="hashbang">
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
