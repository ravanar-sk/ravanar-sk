import React from "react";
import './style.css';

export default function Navigation(props){
	const {onChange,className} = props;
	
	function clickHandler(event){
		event.preventDefault();
		onChange(event.currentTarget.name);
	}
	
	return (
		<div className={className}>
			<div className="side-menu-user">
				<a name='home' onClick={clickHandler}>
					<img className="side-menu-user-icon" src="assets/images/pictures/imgPic3.jpg" />
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