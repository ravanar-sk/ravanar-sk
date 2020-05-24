import React from "react";
import './style.css';

export default function Home(props){
	return (
		<div className="my-profile">
			<div style={{width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', right: 0, bottom: 0, zIndex: -1, opacity: 0.5}}>
				<img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="assets/images/pictures/imgPic1.jpg" />
			</div>
			
			<h1>Hey there...</h1>
			<p className="name">SARAVANA KUMAR K R</p>
			<p className="about-me">Mobile application developer</p>
		</div>
	)
}