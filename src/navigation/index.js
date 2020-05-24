import React from "react";
import './style.css';

export default function Navigation(props){
	return (
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
	)
}