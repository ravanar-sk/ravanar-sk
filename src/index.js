import React from 'react';
import { render } from "react-dom";

import Home from './pages/home'
import Education from './pages/education'
import Work from "./pages/work";
import Hobbies from "./pages/hobbies";
import Navigation from "./navigation";

function App(props){
	
	return (
		<div>
			<Navigation/>
			<div className="page-container">
				<Home/>
				<Education/>
				<Work/>
				<Hobbies/>
			</div>
		</div>
	)
}

render(<App/>, document.getElementById('app'))
