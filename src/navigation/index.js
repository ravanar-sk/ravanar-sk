import React from "react";
import './style.css';

export default function Navigation(props){
	const {onChange} = props;
	
	function clickHandler(event){
		event.preventDefault();
		onChange(event.currentTarget.name);
	}
	
	return (
		<div className="side-navigation-menu">
			<div className="side-menu-item">
				<a name='home' onClick={clickHandler}>
					<img className="side-menu-item-icon" src="assets/images/icons/iconUser.png" />
				</a>
			</div>
			<div className="side-menu-item">
				<a name='education' onClick={clickHandler}>
					<img className="side-menu-item-icon" src="assets/images/icons/iconEducation.png" />
				</a>
			</div>
			<div className="side-menu-item">
				<a name='work' onClick={clickHandler}>
					<img className="side-menu-item-icon" src="assets/images/icons/iconWork.png" />
				</a>
			</div>
			<div className="side-menu-item">
				<a name='hobbies' onClick={clickHandler}>
					<img className="side-menu-item-icon" src="assets/images/icons/iconHobbies.png" />
				</a>
			</div>
		</div>
	)
}