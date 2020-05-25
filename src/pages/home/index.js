import React from "react";
import './style.css';

export default function Home(props){
	return (
		<div className="my-profile">
			<div className='profile-background'>
				<div className='profile-background-overlay'></div>
				<img className='profile-background-image' src="assets/images/pictures/imgPic1.jpg" />
			</div>
			<div className='profile-content'>
				<p className="name">SARAVANA KUMAR K R</p>
				<br/>
				<p className="about-me">Mobile application developer</p>
			</div>
			<div className='profile-url'>
				<div className='profile-url-icon'>
					<a href='https://github.com/ravanar-sk' target='blank'>
						<i className="fab fa-github-square"></i>
					</a>
				</div>
				<div className='profile-url-icon'>
					<a href='https://www.linkedin.com/in/ravanar/' target='blank'>
						<i className="fab fa-linkedin"></i>
					</a>
				</div>
				<div className='profile-url-icon'>
					<i className="fab fa-facebook-square"></i>
				</div>
			</div>
		</div>
	)
}