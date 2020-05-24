import React from 'react';
import { render } from "react-dom";

import Home from './pages/home'
import Education from './pages/education'
import Work from "./pages/work";
import Hobbies from "./pages/hobbies";

function App(props){
	
	return (
		<div>
			<div className="side-navigation-menu">
				<div className="side-menu-item">
					<a href="#my-profile"> <img className="side-menu-item-icon" src="assets/images/icons/iconUser.png" /></a>
				</div>
				<div className="side-menu-item">
					<a href="#education-details">
						<img className="side-menu-item-icon" src="assets/images/icons/iconEducation.png" />
					</a>
				</div>
				<div className="side-menu-item">
					<a href="#work-details"><img className="side-menu-item-icon" src="assets/images/icons/iconWork.png" /></a>
				</div>
				<div className="side-menu-item">
					<a href="#hobbies"><img className="side-menu-item-icon" src="assets/images/icons/iconHobbies.png" /></a>
				</div>
			</div>
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
